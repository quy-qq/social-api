import { Module } from '@nestjs/common';
import { OrtherService } from './orther.service';
import { OrtherController } from './orther.controller';

@Module({
  controllers: [OrtherController],
  providers: [OrtherService]
})
export class OrtherModule {}
