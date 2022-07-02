import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndDegreePartialComponent } from './skills-and-degree-partial.component';

describe('SkillsAndDegreePartialComponent', () => {
  let component: SkillsAndDegreePartialComponent;
  let fixture: ComponentFixture<SkillsAndDegreePartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndDegreePartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAndDegreePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
