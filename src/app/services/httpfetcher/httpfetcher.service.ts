import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'          
})

export class HttpfetcherService {

  constructor() { }
  
  httpFetcher = <RequestType, ResponseType>(
    url : string, 
    params : RequestType,
    temporaryMock: ResponseType
    ) : Promise<ResponseType> => {
    return new Promise<ResponseType>((resolve) => {
      setTimeout(()=>{
        resolve(temporaryMock);
      },3000)
    });
  };

}
