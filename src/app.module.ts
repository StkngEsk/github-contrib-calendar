import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubCalendarModule } from './github-calendar/github-calendar.module';

@Module({
  imports: [
    HttpModule,
    GithubCalendarModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
