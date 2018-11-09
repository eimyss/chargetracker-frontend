import { BookingDTO } from './../../../shared/dto/BookingDTO';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../../../shared/service/backend/booking-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit, OnDestroy  {
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingServiceService) { }
    booking: BookingDTO = new BookingDTO();

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bookingService.getById(id).subscribe((booking: any) => {
          if (booking) {
            this.booking = booking;
          } else {
            console.log(`Expense with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  gotoList() {
    this.router.navigate(['/booking-list']);
  }


  save() {
    console.log('saving');
  }
}
