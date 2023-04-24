import { Injectable } from '@nestjs/common';
import { CreateOrtherDto } from './dto/create-orther.dto';
import { UpdateOrtherDto } from './dto/update-orther.dto';

@Injectable()
export class OrtherService {
  create(createOrtherDto: CreateOrtherDto) {
    return 'This action adds a new orther';
  }

  findAll() {
    return `This action returns all orther`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orther`;
  }

  update(id: number, updateOrtherDto: UpdateOrtherDto) {
    return `This action updates a #${id} orther`;
  }

  remove(id: number) {
    return `This action removes a #${id} orther`;
  }
}
