import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Comment } from './comment.schema';
import { Post } from './post.schema';
import { User } from './user.schema';
export type ReCommentDocument = ReComment & Document;

@Schema({
  collection: 'ReComment',
})
export class ReComment {
  _id: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Comment.name })
  comment: Comment;

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
const ReCommentSchema = SchemaFactory.createForClass(ReComment);
export default ReCommentSchema;
