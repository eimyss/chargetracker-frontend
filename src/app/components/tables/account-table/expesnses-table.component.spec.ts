
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpesnsesTableComponent } from './expesnses-table.component';

describe('ExpesnsesTableComponent', () => {
  let component: ExpesnsesTableComponent;
  let fixture: ComponentFixture<ExpesnsesTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpesnsesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpesnsesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
