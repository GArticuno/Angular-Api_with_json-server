import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from '../model/PlayList.model';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  apiUrl= 'https://parseapi.back4app.com/classes/Lives';
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Parse-Application-Id': process.env.APPLICATION_ID ?? '',
      'X-Parse-REST-API-Key': process.env.REST_API_KEY ?? ''
    })
  };
  data: PlayList[] = [];

  constructor(private httpClient: HttpClient) { }

  public getPlayLists(): Observable<PlayList[]> {
    const json = this.httpClient.get<PlayList[]>(this.apiUrl)
   .subscribe((res) => {
     this.data = res;
   })
    console.log(json);
    return  this.httpClient.get<PlayList[]>(this.apiUrl);
  }

  public getPlayListsByGender(gender: string): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.apiUrl + '&where=' + gender);
  }

  public postPlayLists(playlist: any): Observable<PlayList[]> {
    return this.httpClient.post<any>(this.apiUrl, playlist, this.httpOptions)
  }
}
