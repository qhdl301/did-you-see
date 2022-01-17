import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  getData<RequestType, ResponseType>(url : string){

    return axios.get<RequestType>(url).then(response =>{
      return response.data
    }).catch((error) => {
      console.log(error);
      return error 
    })

  }

}
