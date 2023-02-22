import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CommentRepository, PostRepository } from 'src/database/repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, Post } from '@schema';
import PostSchema from 'src/database/schema/post.schema';
import CommentSchema from 'src/database/schema/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService, PostRepository, CommentRepository],
})
export class PostModule {}
