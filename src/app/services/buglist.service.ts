import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class BuglistService {

  constructor(private http: HttpClient) { }

  getBugList(params): Observable<any> {
    return this.http.get(baseUrl, { params });
  }
}
