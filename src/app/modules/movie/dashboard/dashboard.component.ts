import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, fromEvent, map, Observable, of, takeUntil, throwError } from 'rxjs';
import { HttpfetcherService }from 'src/app/utils/httpfetcher/httpfetcher.utils';
import { BoxOfficeListMock }from 'src/app/services/mocks/dailyBoxOfficeList';
import { ApiService } from 'src/app/services/api/api.service';

export type DailyBoxOfficeRequestType = {  
  month : string,
  type : string,
}

export type DailyBoxOfficeResponseType = {  
    movieCd: string,
    movieNm: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dailyBoxOfficeList : DailyBoxOfficeResponseType[] = [];

  constructor(private apiService : ApiService) {
  }
  
  ngOnInit(): void { 
    const CONFIG_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9430c2c33b50e50ac0a085c9774f6855&targetDt=20120101';  // 나눠주자
    this.apiService.getData(CONFIG_URL).then(res=>{
      this.dailyBoxOfficeList = res.boxOfficeResult.dailyBoxOfficeList;
      console.log("dailyBoxOfficeList",this.dailyBoxOfficeList);
    })
  }
}
