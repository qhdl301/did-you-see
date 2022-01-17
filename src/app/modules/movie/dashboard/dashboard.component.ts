import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, fromEvent, map, Observable, of, takeUntil, throwError } from 'rxjs';
import { HttpfetcherService }from 'src/app/utils/httpfetcher/httpfetcher.utils';
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
export class DashboardComponent implements OnInit {
  dailyBoxOfficeList : DailyBoxOfficeResponseType[] = [];

  constructor(private httpFetcherService : HttpfetcherService) {
    this.getDailyBoxOfficeList('', {month : '', type : ''}) 
  }
  
  ngOnInit(): void { }

  getDailyBoxOfficeList(url : string, params : DailyBoxOfficeRequestType) {
    const boxOfficeObserver$ = this.httpFetcherService.httpFetcher(url, params, BoxOfficeListMock);
    boxOfficeObserver$
      .pipe(    // 데이터 1차 가공 할 수 있음
        map(res => res),
        catchError(err => {
            console.log('caught mapping error and rethrowing', err);
            return throwError(err);
        }),
        catchError(err => {
            console.log('caught rethrown error, providing fallback value');
            return of([]);
        })
      )
      .subscribe(
        res => this.dailyBoxOfficeList = res,
        err => console.error('HTTP Error', err.meesage),
      )
  }
}
