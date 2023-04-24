import { Test, TestingModule } from '@nestjs/testing';
import { OrtherController } from './orther.controller';
import { OrtherService } from './orther.service';

describe('OrtherController', () => {
  let controller: OrtherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrtherController],
      providers: [OrtherService],
    }).compile();

    controller = module.get<OrtherController>(OrtherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
