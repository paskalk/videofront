import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHistoryItem } from './historyItem';

@Injectable({
  providedIn: 'root'
})
export class UrlhistoryService {

  private _apiUrl: string = "http://localhost:8000/api/testaddresses/";


  constructor(private http: HttpClient) { }

  saveToDatabase(value): Observable<IHistoryItem>{
    return this.http.post<IHistoryItem>(this._apiUrl, {address: value});
  }

  saveToLocalStorage(key, value){
    let list = this.getFromLocalStorage(key);
    if (!list.includes(value)){
        list.unshift(value);
    }
    
    localStorage.setItem(key, JSON.stringify(list));
  }

  getFromLocalStorage(key){
    let list = JSON.parse(localStorage.getItem(key)) || [];
    return list;
  }

  getHistoryFromDatabase(): Observable<IHistoryItem[]>{
    return this.http.get<IHistoryItem[]>(this._apiUrl);
  }

}
