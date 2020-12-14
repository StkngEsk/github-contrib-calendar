import { Controller, Get, Param } from '@nestjs/common';
import { GithubCalendarService } from './github-calendar.service';

@Controller('github-contrib-calendar')
export class GithubCalendarController {

    constructor(private githubCalendarService: GithubCalendarService) { }

    @Get('/:user/:year')
    getGithubCalendar(
        @Param('user') user,
        @Param('year') year
    ) {
        return this.githubCalendarService.getSvgFormat(user, year);
    }
}
