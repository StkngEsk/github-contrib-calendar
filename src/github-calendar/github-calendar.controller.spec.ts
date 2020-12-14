import { Test, TestingModule } from '@nestjs/testing';
import { GithubCalendarController } from './github-calendar.controller';

describe('GithubCalendarController', () => {
  let controller: GithubCalendarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubCalendarController],
    }).compile();

    controller = module.get<GithubCalendarController>(GithubCalendarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
