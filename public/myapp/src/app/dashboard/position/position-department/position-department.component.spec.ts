import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDepartmentComponent } from './position-department.component';

describe('PositionDepartmentComponent', () => {
  let component: PositionDepartmentComponent;
  let fixture: ComponentFixture<PositionDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
