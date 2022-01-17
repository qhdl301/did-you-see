import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map } from 'rxjs';
import { BoxOfficeDetailMock } from 'src/app/services/mocks/dailyBoxOfficeDetail';
import { HttpfetcherService } from 'src/app/utils/httpfetcher/httpfetcher.utils';
import { DailyBoxOfficeResponseType, DashboardComponent } from '../dashboard/dashboard.component';

export type MovieDetailRequestType = {  
  movieCd : string | null,
}

export type MovieDetailResPonseType = {  
  description : string
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    movieCd : number | undefined;
    boxOfficeDescription : MovieDetailResPonseType = {
      description: ''
    }
    boxOfficeItem : DailyBoxOfficeResponseType | undefined = {
      movieCd: '',
      movieNm: ''
    }

    constructor(
      private route: ActivatedRoute, 
      private dashBoardItems : DashboardComponent,
      private httpFetcherService : HttpfetcherService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.movieCd = Number(params.get('movieCd'));
      this.boxOfficeItem = this.dashBoardItems.dailyBoxOfficeList.find(item => item.movieCd === params.get('movieCd'));
      this.getDetailData('', params.get('movieCd'));
    })
  }

  getDetailData(url : string, param : MovieDetailRequestType['movieCd']){
    const detailObserver$ = this.httpFetcherService.httpFetcher(url,param,BoxOfficeDetailMock);
    detailObserver$
      .pipe(
        map(res => res),
      )
      .subscribe(
        res => res,
        err => console.error('HTTP MovieDetail Error', err.meesage),
      )

  }

}
