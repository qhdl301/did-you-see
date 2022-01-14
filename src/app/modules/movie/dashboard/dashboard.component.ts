import { Component } from '@angular/core';
import { catchError, map, of, throwError } from 'rxjs';
import { HttpfetcherService }from 'src/app/services/httpfetcher/httpfetcher.service';
import { BoxOfficeListMock }from 'src/app/services/mocks/dailyBoxOfficeList';

export type DailyBoxOfficeRequestType = {  
  month : string,
  type : string,
}

export type DailyBoxOfficeResponseType = {  
    movieCd: string,
    imgUrl : string,
    title : string,
    type : string[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dailyBoxOfficeList : DailyBoxOfficeResponseType[] = [];
  constructor(private httpFetcherService : HttpfetcherService) {this.getDailyBoxOfficeList('',{month : '', type : ''}) }

  async getDailyBoxOfficeList(url : string, params : DailyBoxOfficeRequestType) {
    const observer = this.httpFetcherService.httpFetcher(url, params, BoxOfficeListMock);
    observer
      .pipe(
        map(res => res),
          catchError(err => {
              console.log('caught mapping error and rethrowing', err);
              return throwError(err);
          }),
          catchError(err => {
              console.log('caught rethrown error, providing fallback value');
              return of([]);
          })
      ).subscribe(
        res => this.dailyBoxOfficeList = res,
        err => console.error('HTTP Error', err.meesage),
      )
  }
}
