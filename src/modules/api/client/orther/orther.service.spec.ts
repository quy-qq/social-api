import { Test, TestingModule } from '@nestjs/testing';
import { OrtherService } from './orther.service';

describe('OrtherService', () => {
  let service: OrtherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrtherService],
    }).compile();

    service = module.get<OrtherService>(OrtherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
