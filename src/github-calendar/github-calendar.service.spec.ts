import { Test, TestingModule } from '@nestjs/testing';
import { GithubCalendarService } from './github-calendar.service';

describe('GithubCalendarService', () => {
  let service: GithubCalendarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubCalendarService],
    }).compile();

    service = module.get<GithubCalendarService>(GithubCalendarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
