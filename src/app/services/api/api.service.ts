import { Injectable } from '@angular/core';
import initialization from '../../environment/axiosSetup'
import { axiosRequestConfiguration } from 'src/app/environment/axiosRequestConfiguration';
import { AxiosInstance } from 'axios';
import { defer, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  axiosInstance : AxiosInstance;

  constructor() { 
    this.axiosInstance = initialization(axiosRequestConfiguration);
  }

  get = <RequestType, ResponseType>(
    url: string, 
    queryParams?: RequestType
    ): Observable<ResponseType> => {
    return defer(()=> this.axiosInstance.get<ResponseType>(url, { params: queryParams }))
      .pipe(
        map(result => result.data)
      );
  };
 
}
