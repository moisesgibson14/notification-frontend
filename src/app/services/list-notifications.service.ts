import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ListNotificationsService {
  API_URL = 'http://localhost:8080'
  constructor(private httpClient: HttpClient) {
  
   }


   modelNotification(){
  
   }

  getNotifications() : Observable<any>{
    // console.log(this.httpClient.get(`${this.API_URL}customer/`));
    return this.httpClient.get(`${this.API_URL}/customer/`)
  }



}
