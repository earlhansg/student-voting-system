import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCollegeComponent } from './position-college.component';

describe('PositionCollegeComponent', () => {
  let component: PositionCollegeComponent;
  let fixture: ComponentFixture<PositionCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
