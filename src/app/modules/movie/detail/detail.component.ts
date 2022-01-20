import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { BoxOfficeDetailConf } from 'src/app/environment/environment-movie';
import { ApiService } from 'src/app/services/api/api.service';

export type MovieDetailRequestType = {  
  key : string,
  movieCd : string | null,
}

export type MovieDetailResPonseType = {  
  movieInfoResult : MovieInfoResPonseType
}

export type MovieInfoResPonseType = {  
  movieInfo : MovieInfoItemType
}

export type MovieInfoItemType = {  
  movieNm : string,
  movieNmEn : string,
  openDt : string,
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    movieCd : string | null = null;
    detailData: MovieInfoItemType | undefined;

    constructor(
      private route: ActivatedRoute, 
      private apiService : ApiService
    ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params:ParamMap) => {
        this.movieCd = params.get('movieCd');
    })
    if(this.getDetailData){
      this.getDetailData(BoxOfficeDetailConf.serviceUrl, {key : BoxOfficeDetailConf.token, movieCd : this.movieCd});
    }
  }

  getDetailData(url : string, queryParams : MovieDetailRequestType){
    this.apiService.get<MovieDetailRequestType, MovieDetailResPonseType>(url,queryParams)
      .pipe(
        take(1),
        map(response => response.movieInfoResult.movieInfo),
      )
      .subscribe(
        (response) => {
          if(response){
           this.detailData = response as MovieInfoItemType;
          }
        }
      )

  }

}
