import { PartialType } from '@nestjs/swagger';
import { CreateOrtherDto } from './create-orther.dto';

export class UpdateOrtherDto extends PartialType(CreateOrtherDto) {}
