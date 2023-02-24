import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from 'src/database/repository';
import { User } from '@schema';
import { PostRepository } from 'src/database/repository';
import mongoose from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { RecommentRepository } from 'src/database/repository/recomment.repository';
@Injectable()
export class CommentService {
  constructor(
    private commentRepository: CommentRepository,
    private postRepository: PostRepository,
    private recommentRepository: RecommentRepository,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async create(createCommentDto: CreateCommentDto, user: User, idPost: string) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const comment = await this.commentRepository.actionCreate({
        ...createCommentDto,
        user: user._id,
      });
      await this.postRepository.model
        .updateOne({ _id: idPost }, { $push: { comments: comment._id } })
        .session(session);
      await session.commitTransaction();
      return comment;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async findAllCommentByPost(idPost: string) {
    return await this.commentRepository.model
      .find({ where: { post: idPost } })
      .populate('reComment');
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.commentRepository.actionFindByIdAndUpdate(
      id,
      updateCommentDto,
    );
  }

  async remove(id: string) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await this.postRepository.model
        .updateOne(
          {
            comments: {
              $in: id,
            },
          },
          { $pull: { comments: id } },
        )
        .session(session);
      await this.recommentRepository.model
        .deleteMany({ comment: id })
        .session(session);
      const deleteComment = await this.commentRepository.deleteById(id);
      await session.commitTransaction();
      return deleteComment;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
