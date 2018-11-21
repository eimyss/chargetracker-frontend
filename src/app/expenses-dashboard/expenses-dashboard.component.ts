import { Component, ChangeDetectorRef, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent, TdRotateAnimation } from '@covalent/core';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'ExpensesdashboardComponent',
  templateUrl: './expenses-dashboard.component.html',
  styleUrls: ['./expenses-dashboard.component.css']
})
export class ExpensesDashboardComponent implements AfterViewInit {
  miniNav = false;

  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;


  constructor(public media: TdMediaService,
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    }

  dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
  dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
    setTimeout(() => {
      //this.manageList.sidenav._animationStarted.emit();
    });
  }

}
