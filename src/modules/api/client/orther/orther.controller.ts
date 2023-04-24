import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrtherService } from './orther.service';
import { CreateOrtherDto } from './dto/create-orther.dto';
import { UpdateOrtherDto } from './dto/update-orther.dto';

@Controller('orther')
export class OrtherController {
  constructor(private readonly ortherService: OrtherService) {}

  @Post()
  create(@Body() createOrtherDto: CreateOrtherDto) {
    return this.ortherService.create(createOrtherDto);
  }

  @Get()
  findAll() {
    return this.ortherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ortherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrtherDto: UpdateOrtherDto) {
    return this.ortherService.update(+id, updateOrtherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ortherService.remove(+id);
  }
}
