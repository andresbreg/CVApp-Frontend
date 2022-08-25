import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../model/model';

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

  getData(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${table}`);
  }

  deleteElement(table:string, id:String):Observable<any> {
    return this.http.delete(`${this.apiUrl}${table}` + '/' + id);
  }

  addElement(table:string, model:any):Observable<any> {
    return this.http.post(`${this.apiUrl}${table}`, model);
  }
}
