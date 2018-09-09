
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesNavigationComponent } from './expenses-navigation.component';

describe('ExpensesNavigationComponent', () => {
  let component: ExpensesNavigationComponent;
  let fixture: ComponentFixture<ExpensesNavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
