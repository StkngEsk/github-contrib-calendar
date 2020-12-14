import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as $ from 'cheerio';
import { Observable } from 'rxjs';

@Injectable()
export class GithubCalendarService {

    constructor(
        private httpService: HttpService,
      ) { }
      private getHtml(user: string, year: string): Observable<AxiosResponse<any>> {
        return this.httpService.get(`https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`);
      }
    
      public async getSvgFormat(user: string, year: string) {
    
        let calendar: any;
    
        await this.getHtml(user, year).toPromise().then(
          (res: any) => {
            $('div .graph-canvas', res.data).each(function () {
              calendar = $(this).html();
            });
          }
        );
    
        return calendar;
    
      }

}
