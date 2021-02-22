import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from '../model/PlayList.model';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  apiUrl='http://localhost:3000/pl';
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getPlayLists(): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.apiUrl);
  }

  public getPlayListsByGender(gender: string): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.apiUrl + '?PlayListTheme=' + gender);
  }

  public postPlayLists(playlist: any): Observable<PlayList[]> {
    return this.httpClient.post<any>(this.apiUrl, playlist, this.httpOptions)
  }
}
