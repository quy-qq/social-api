import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/api/client/user/user.module';
import { AuthenticationModule } from './modules/api/client/authentication/authentication.module';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { JwtAuthGuard } from './common/guard';
// import { AuthenticationModule } from './modules/api/client/authentication/authentication.module';
// import { UserModule } from './modules/api/cms/user/user.module';
// import { AuthenticationModule } from './modules/api/cms/authentication/authentication.module';
// import { AuthorizationModule } from './modules/api/cms/authorization/authorization.module';
import { PostModule } from './modules/api/client/post/post.module';
import { LikeModule } from './modules/api/client/like/like.module';
import { CommentModule } from './modules/api/client/comment/comment.module';
import { ClientModule } from './modules/api/client/client.module';
import { ApiRoute } from './router';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://quynguyen:J1q55fVc6W2hsiSr@social.mx7nvwb.mongodb.net/test',
    ),
    RouterModule.register(ApiRoute),
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
