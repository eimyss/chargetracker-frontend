
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesDashboardComponent } from './expenses-dashboard.component';

describe('ExpensesDashboardComponent', () => {
  let component: ExpensesDashboardComponent;
  let fixture: ComponentFixture<ExpensesDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
