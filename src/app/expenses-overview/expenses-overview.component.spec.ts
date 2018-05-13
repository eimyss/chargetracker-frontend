import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesOverviewComponent } from './expenses-overview.component';

describe('ExpensesOverviewComponent', () => {
  let component: ExpensesOverviewComponent;
  let fixture: ComponentFixture<ExpensesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
