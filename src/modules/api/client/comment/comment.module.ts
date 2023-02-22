import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentRepository, PostRepository } from 'src/database/repository';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema, { Comment } from 'src/database/schema/comment.schema';
import PostSchema, { Post } from 'src/database/schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository, PostRepository],
})
export class CommentModule {}
