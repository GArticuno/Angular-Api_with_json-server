import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from '../model/PlayList.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  apiUrl= 'https://parseapi.back4app.com/classes/Lives';
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Parse-Application-Id': environment.APPLICATION_ID,
      'X-Parse-REST-API-Key': environment.REST_API_KEY
    })
  };
  data: PlayList[] = [];

  constructor(private httpClient: HttpClient) { }

  public getPlayLists(): Observable<{ results: PlayList[]}> {
    const json = this.httpClient.get<{ results: PlayList[]}>(this.apiUrl, this.httpOptions)
   .subscribe((res) => {
     this.data = res.results;
   })
    console.log(json);
    return  this.httpClient.get<{ results: PlayList[]}>(this.apiUrl, this.httpOptions);
  }

  public getPlayListsByGender(gender: string): Observable<{ results: PlayList[]}> {
    const where = encodeURIComponent(JSON.stringify({
      "playListTheme": gender,
    }));
    return this.httpClient.get<{ results: PlayList[]}>(this.apiUrl + '?where=' + where, this.httpOptions);
  }

  public postPlayLists(playlist: any): Observable<{ results: PlayList[]}> {
    return this.httpClient.post<any>(this.apiUrl, playlist, this.httpOptions);
  }
}
