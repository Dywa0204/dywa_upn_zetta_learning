import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Data } from './mentor.model';

const newData = {
  _id: 19,
  email: 'dajhdawhdbj',
  civility: 'MR',
  first_name: 'awswd',
  last_name: 'adwada',
  company: {
    name: 'aaaaa',
    user_type: 'bbbb'
  },
  user_status: 'pending',
  count_document: 9
}

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private _jsonURL = 'assets/mentor.json'
  jsonData: Data[] = [];

  constructor(private http: HttpClient) { 
    
  }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this._jsonURL).pipe(
      map(data => this.jsonData = data.map(data => ({
        ...data
      })))
    );
  }

  addData(): Observable<Data> {
    return this.http.post<Data>(this._jsonURL, newData)
  }
}
