import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendInfoPageComponent } from './backend-info-page.component';

describe('BackendInfoPageComponent', () => {
  let component: BackendInfoPageComponent;
  let fixture: ComponentFixture<BackendInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
