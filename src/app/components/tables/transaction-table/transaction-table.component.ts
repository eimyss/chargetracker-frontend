import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { TranscationDTO } from '../../../shared/dto/TransactionDTO';
import { ProcessingService } from '../../../shared/service/backend/processing.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<any>;
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['amountAfter', 'type', 'processingDate'];
  transactions: TranscationDTO[] = new Array<TranscationDTO>();

  constructor(private transactionService: ProcessingService) { }

  ngOnInit() {
      this.transactionService.getTransactionsList().subscribe(data => {
      this.transactions = data;
      this.dataSource = new MatTableDataSource(this.transactions);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.length = data.length;
    }, error => console.error(error));

  }

  detailAccount(dto: TranscationDTO) {
    console.log('click:' + dto);
  }
}
