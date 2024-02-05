import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private API_URL = environment.API_URL;

  Alldata(): Observable <any> {

    return this.http.get(this.API_URL + '/Swimlane/angular-data-table@master/demos/data/complex-100000.json');
  }
}
