
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTableComponent } from './booking-table.component';

describe('ExpesnsesTableComponent', () => {
  let component: BookingTableComponent;
  let fixture: ComponentFixture<BookingTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
