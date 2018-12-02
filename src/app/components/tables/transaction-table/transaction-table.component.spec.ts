
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTableComponent } from './transaction-table.component';

describe('ExpesnsesTableComponent', () => {
  let component: TransactionTableComponent;
  let fixture: ComponentFixture<TransactionTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
