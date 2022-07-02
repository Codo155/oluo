import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesAndLanguagesPartialComponent } from './hobbies-and-languages-partial.component';

describe('HobbiesAndLanguagesPartialComponent', () => {
  let component: HobbiesAndLanguagesPartialComponent;
  let fixture: ComponentFixture<HobbiesAndLanguagesPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesAndLanguagesPartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesAndLanguagesPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
