import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { Observable } from 'rxjs';
import { ProjectServiceService } from '../../../shared/service/backend/project-service.service';
import { ProjectDTO } from '../../../shared/dto/ProjectDTO';
import { BookingDTO } from '../../../shared/dto/BookingDTO';
import { BookingServiceService } from '../../../shared/service/backend/booking-service.service';

@Component({
  selector: 'project-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss']
})
export class BookingTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<any>;
  resultsloaded: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','projectId','startDate','endDate'];
  bookings: BookingDTO[] = new Array<BookingDTO>();

  constructor(private bookingService: BookingServiceService) { }

  ngOnInit() {
      this.bookingService.getBookingList().subscribe(data=> {
      this.bookings = data;
      this.dataSource = new MatTableDataSource(this.bookings);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.length = data.length;
    },error => console.error(error));

  }

  detailAccount(dto: BookingDTO) {
    console.log('click:' + dto);
  }
}
