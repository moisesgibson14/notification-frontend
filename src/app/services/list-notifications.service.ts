import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ListNotificationsService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  // API_URL = 'http://localhost:8080'
  API_URL = 'https://66d19073.ngrok.io'
  constructor(private httpClient: HttpClient) {

  }

  //  GET NOTIFICATION

  getNotifications(): Observable<any> {
    // console.log(this.httpClient.get(`${this.API_URL}customer/`));
    return this.httpClient.get(`${this.API_URL}/customer/`)
      .pipe(
        catchError(this.handleError)
      )
  }
  getNotificationById(idNot): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/customer/${idNot}`)
  }

  // UPDATE NOTIFICATION

  updateViewNotification(dataNotification): Observable<any> {
    console.log(dataNotification);
    return this.httpClient.put<any>(`${this.API_URL}/customer/`, dataNotification)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteNotification(dataNotification): Observable<any>{
    console.log('entro ,' , dataNotification);
    
    return this.httpClient.put<any>(`${this.API_URL}/customer/`,dataNotification,httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


}
