import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../../environment/environment.service';
import { Observable } from 'rxjs';
import { BookingDTO } from '../../dto/BookingDTO';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {
  constructor(private http: HttpClient, private environment: EnvironmentService) { }

  getTransactionsList(): Observable <any> {
      return this.http.get(this.environment.API + '/transactions/get/all');
  }

  getById(id: string) {
    return this.http.get(this.environment.API + '/transactions/get/' + id);
  }

  getByTypeAndEntity(id: string, type: string) {
    return this.http.get(this.environment.API + '/transactions/get/' + type + '/' + id);
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
