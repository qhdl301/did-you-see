import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'          
})

export class HttpfetcherService {
  constructor() { }
  
  httpFetcher = <RequestType, ResponseType>(
    url : string, 
    params : RequestType,
    temporaryMock: ResponseType
    ) : Observable<ResponseType> => {
    return new Observable<ResponseType>(observer => {
      setTimeout(() => {
        observer.next(temporaryMock);
        observer.complete();
      }, 3000);
    });
  };

}
