import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndEducationPartialComponent } from './work-and-education-partial.component';

describe('WorkAndEducationPartialComponent', () => {
  let component: WorkAndEducationPartialComponent;
  let fixture: ComponentFixture<WorkAndEducationPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAndEducationPartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAndEducationPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
