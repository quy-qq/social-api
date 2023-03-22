import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '@schema';
import { AuthenticationBaseService } from 'src/common/base';
import { ChattingRepository, UserRepository } from 'src/database/repository';
import { ConversationRepository } from 'src/database/repository/conversation.repository';
import ChattingSchema, { Chatting } from 'src/database/schema/chatting.schema';
import ConversationSchema, {
  Conversation,
} from 'src/database/schema/conversation.schema';
import UserSchema from 'src/database/schema/user.schema';
import { UserService } from '../user/user.service';
import { ChattingController } from './chatting.controller';
import { ChattingGateway } from './chatting.gateway';
import { ChattingService } from './chatting.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Conversation.name, schema: ConversationSchema },
      { name: Chatting.name, schema: ChattingSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [ChattingController],
  providers: [
    ChattingService,
    ChattingGateway,
    ChattingRepository,
    AuthenticationBaseService,
    JwtService,
    UserService,
    ConversationRepository,
    UserRepository,
  ],
})
export class ChattingModule {}
