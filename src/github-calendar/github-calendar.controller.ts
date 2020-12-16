import { Controller, Get, Param } from '@nestjs/common';
import { GithubCalendarService } from './github-calendar.service';

@Controller('github-contrib-calendar')
export class GithubCalendarController {

    constructor(private githubCalendarService: GithubCalendarService) { }

    @Get('/:user/:year')
    getGithubCalendar(
        @Param('user') user,
        @Param('year') year
    ): Promise<{
        textContributions: string;
        calendar: any;
    }> {
        return this.githubCalendarService.getSvgFormat(user, year);
    }
}
