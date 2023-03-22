import { HttpException, Injectable } from '@nestjs/common';
import { Chatting, User } from '@schema';
import { parse } from 'cookie';
import { Socket } from 'socket.io';
import { ChattingRepository } from 'src/database/repository';
import { WsException } from '@nestjs/websockets';
import { AuthenticationBaseService } from 'src/common/base';
import { MessageInterface } from './dto/message.dto';
import { ConversationRepository } from 'src/database/repository/conversation.repository';

@Injectable()
export class ChattingService {
  constructor(
    private chattingRepository: ChattingRepository,
    private authenticationService: AuthenticationBaseService,
    private conversationRepository: ConversationRepository,
  ) {}

  async getUserFromSocket(socket: Socket) {
    console.log('socket:', socket);
    const cookie = socket.handshake.headers.cookie;
    const { Authentication: authenticationToken } = parse(cookie);
    const user =
      await this.authenticationService.getUserFromAuthenticationToken(
        authenticationToken,
      );
    if (!user) {
      throw new WsException('Invalid credentials.');
    }
    return user;
  }

  async getChats(): Promise<Chatting[]> {
    return await this.chattingRepository.actionGetAll();
  }

  async saveChat(message: MessageInterface, sender: any) {
    const chat = {
      ...message,
      sender: sender,
    };
    const chatting = await this.chattingRepository.actionCreate(chat);
  }
}
