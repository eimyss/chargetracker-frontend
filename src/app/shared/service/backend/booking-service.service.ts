import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../../environment/environment.service';
import { BookingDTO } from '../../dto/BookingDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  constructor(private http: HttpClient, private environment: EnvironmentService) { }


  getBookingList(): Observable <any> {
      return this.http.get(this.environment.API + '/bookings/all');
  }

  getById(id: string) {
    return this.http.get(this.environment.API + '/bookings/get/' + id);
  }

  remove(id: string) {
    return this.http.get(this.environment.API + '/bookings/get/' + id);
  }
  save(booking: BookingDTO): Observable<any> {
    let result: Observable<Object>;
    console.log('saving:' + booking);

    if (booking['id']) {
      console.log('updating account');
      result = this.http.put(this.environment.BOOKING_API + '/save', booking);
    } else {
      console.log('saving new account');
      result = this.http.post(this.environment.BOOKING_API + '/save', booking);
    }
    return result;
  }

}
