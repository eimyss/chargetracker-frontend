import { BookingDTO } from './../../../shared/dto/BookingDTO';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../../../shared/service/backend/booking-service.service';
import { Subscription } from 'rxjs';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { ProjectServiceService } from '../../../shared/service/backend/project-service.service';
import { ProjectDTO } from '../../../shared/dto/ProjectDTO';
import { ProcessingService } from '../../../shared/service/backend/processing.service';
import { TranscationDTO } from '../../../shared/dto/TransactionDTO';
import { ExpenseService } from '../../../shared/expense/expense.service';
import { Expense } from '../../../shared/dto/expense';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers: [
],
})
export class BookingsComponent implements OnInit, OnDestroy  {
  sub: Subscription;
  value = '';
  disabled = false;
  booking: BookingDTO = new BookingDTO();
  expense: Expense = new Expense();
  project: ProjectDTO = new ProjectDTO();
  transcation: TranscationDTO = new TranscationDTO();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private processingService: ProcessingService,
    private expensesService: ExpenseService,
    private projectService: ProjectServiceService,
    private bookingService: BookingServiceService) { }


  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bookingService.getById(id).subscribe((booking: any) => {
          if (booking) {
            this.booking = booking;
            if (booking.projectId)  {
              this.projectService.getById(booking.projectId).subscribe((project: any) => {
                this.project = project;
              });
            }

            // get transaction to the booking
            this.processingService.getByTypeAndEntity(booking.serverBookingId, 'BOOKING').subscribe((transcation: any) => {
              this.transcation = transcation;
            });
            // get created expense for the booking
            this.expensesService.getExpenseByRefBooking(booking.serverBookingId).subscribe((expense: any ) => {
              this.expense = expense;
            });

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

  remove(id: string) {
    console.log(id);
  }

  gotoList() {
    this.router.navigate(['/booking-list']);
  }


  save() {
    console.log('saving');
  }
}
