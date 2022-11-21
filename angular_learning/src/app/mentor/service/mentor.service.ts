import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Data } from './mentor.model';


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
}
