import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public API = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/booking');
  }

  get(id: string) {
    return this.http.get(this.API + '/booking/' + id);
  }

  save(booking: any): Observable<any> {
    let result: Observable<Object>;
    if (booking['href']) {
      result = this.http.put(booking.href, booking);
    } else {
      result = this.http.post(this.API + '/booking', booking);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  getclassdays() {
    return this.http.get('./assets/ClassDays.json');
  }

}
