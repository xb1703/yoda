import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostureService {

  public API = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/postures');
  }

  get(id: string) {
    return this.http.get(this.API + '/postures/' + id);
  }
}
