import { Component, OnInit } from '@angular/core';
import { BoxOfficeListMock }from 'src/app/services/mocks/dailyBoxOfficeList';

export type DailyBoxOfficeProps = {  
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

  constructor() { }

  dailyBoxOfficeList : DailyBoxOfficeProps[] = BoxOfficeListMock;
}
