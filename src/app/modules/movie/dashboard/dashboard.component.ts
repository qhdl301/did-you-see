import { Component } from '@angular/core';
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
    this.dailyBoxOfficeList = await this.httpFetcherService.httpFetcher(url, params, BoxOfficeListMock);
  }
}
