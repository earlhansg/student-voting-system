import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDepartmentComponent } from './tally-department.component';

describe('TallyDepartmentComponent', () => {
  let component: TallyDepartmentComponent;
  let fixture: ComponentFixture<TallyDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
