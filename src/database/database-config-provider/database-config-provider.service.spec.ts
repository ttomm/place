import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConfigProviderService } from './database-config-provider.service';

describe('DatabaseConfigProviderService', () => {
  let service: DatabaseConfigProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseConfigProviderService],
    }).compile();

    service = module.get<DatabaseConfigProviderService>(DatabaseConfigProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
