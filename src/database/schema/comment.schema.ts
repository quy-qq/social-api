import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Post } from './post.schema';
import { User } from './user.schema';
export type CommentDocument = Comment & Document;

@Schema({
  collection: 'Comment',
})
export class Comment {
  _id: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  post: Post;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: Date.now,
  })
  updatedAt: Date;
}
const CommentSchema = SchemaFactory.createForClass(Comment);
export default CommentSchema;
