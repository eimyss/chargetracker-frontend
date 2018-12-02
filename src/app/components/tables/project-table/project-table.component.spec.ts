
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableComponent } from './project-table.component';

describe('ExpesnsesTableComponent', () => {
  let component: ProjectTableComponent;
  let fixture: ComponentFixture<ProjectTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
