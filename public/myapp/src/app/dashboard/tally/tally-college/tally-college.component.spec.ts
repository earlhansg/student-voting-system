import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCollegeComponent } from './tally-college.component';

describe('TallyCollegeComponent', () => {
  let component: TallyCollegeComponent;
  let fixture: ComponentFixture<TallyCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
