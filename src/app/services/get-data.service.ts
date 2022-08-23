import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  education = {
    id: String,
    logoUrl: String,
    startDate: String,
    endDate: String,
    name: String,
    course: String
  };

  constructor(private http:HttpClient) {}

  apiUrl='http://localhost:8080/';

  getData(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${table}`);
  }
}
