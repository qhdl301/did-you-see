import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { BoxOfficeListConf } from 'src/app/environment/environment-movie';

export type DailyBoxOfficeReqeustType = { 
  key: string,
  targetDt: string,
}

export type DailyBoxOfficeResponseType = { 
  boxOfficeResult : DailyBoxOfficeListType
}

export type DailyBoxOfficeListType = { 
  dailyBoxOfficeList : DailyBoxOfficeItemType
}

export type DailyBoxOfficeItemType = { 
    movieCd: string,
    movieNm: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dailyBoxOfficeList : Array<DailyBoxOfficeItemType>  = [];
  constructor(private apiService : ApiService) {}
  
  ngOnInit(): void {
    this.getBoxOfficeList(BoxOfficeListConf.serviceUrl, {key : BoxOfficeListConf.token, targetDt : BoxOfficeListConf.targetDt});
  }

  getBoxOfficeList(url : string, queryParams : DailyBoxOfficeReqeustType) {
    this.apiService.get<DailyBoxOfficeReqeustType, DailyBoxOfficeResponseType>(url, queryParams)
      .pipe(
        take(1),
        map(response => response.boxOfficeResult.dailyBoxOfficeList),
      )
      .subscribe(
        (response) => {
          if(response){
            this.dailyBoxOfficeList = response as unknown as Array<DailyBoxOfficeItemType>;
          }
        }
      )
  }

  
}
