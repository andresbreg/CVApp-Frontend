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

  experience = {
    id: String,
    logoUrl: String,
    startDate: String,
    endDate: String,
    name: String,
    job: String
  };

  skill = {
    id: String,
    logoUrl: String,
    name: String,
    skillLevel: String
  };

  apiUrl='http://localhost:8080/';

  constructor(private http:HttpClient) {}

  getData(table: String): Observable<any> {
    return this.http.get(`${this.apiUrl}${table}`);
  }

  deleteElement(table:String, id:String): Observable<any> {
    return this.http.delete(`${this.apiUrl}${table}` + '/' + id);
  }

  addElement(table:String, model:any): Observable<any> {
    return this.http.post(`${this.apiUrl}${table}`, model);
  }

  getElement(table:String, id:String): Observable<any> {
    return this.http.get(`${this.apiUrl}${table}` + '/' + id);
  }

  editElement(table:String, model:any, id:String): Observable<any> {
    return this.http.put(`${this.apiUrl}${table}` + '/' + id, model);
  }
}
