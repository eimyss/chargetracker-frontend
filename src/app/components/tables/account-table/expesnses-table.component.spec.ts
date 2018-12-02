
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTableComponent } from './account-table.component';

describe('ExpesnsesTableComponent', () => {
  let component: AccountTableComponent;
  let fixture: ComponentFixture<AccountTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
