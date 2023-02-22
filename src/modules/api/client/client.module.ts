import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { MarketModule } from './market/market.module';
import { DatingModule } from './dating/dating.module';
import { RecommentModule } from './recomment/recomment.module';
import { ChattingModule } from './chatting/chatting.module';
@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    PostModule,
    LikeModule,
    CommentModule,
    MarketModule,
    DatingModule,
    RecommentModule,
    ChattingModule,
  ],
  providers: [],
  controllers: [],
})
export class ClientModule {}