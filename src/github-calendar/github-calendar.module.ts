import { HttpModule, Module } from '@nestjs/common';
import { GithubCalendarService } from './github-calendar.service';
import { GithubCalendarController } from './github-calendar.controller';

@Module({
  imports:[HttpModule],
  providers: [GithubCalendarService],
  controllers: [GithubCalendarController]
})
export class GithubCalendarModule {}
