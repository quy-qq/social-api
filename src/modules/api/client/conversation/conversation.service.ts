import { Injectable } from '@nestjs/common';
import { User } from '@schema';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { ConversationRepository } from 'src/database/repository/conversation.repository';
@Injectable()
export class ConversationService {
  constructor(private conversationRepository: ConversationRepository) {}
  async create(createConversationDto: CreateConversationDto, user: User) {
    return await this.conversationRepository.actionGetAllByUser(user);
  }

  findAll(user: User) {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
