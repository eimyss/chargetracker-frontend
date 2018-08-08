import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailedComponent } from './account-detailed.component';

describe('AccountDetailedComponent', () => {
  let component: AccountDetailedComponent;
  let fixture: ComponentFixture<AccountDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
