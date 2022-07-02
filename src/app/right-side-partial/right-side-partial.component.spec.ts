import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidePartialComponent } from './right-side-partial.component';

describe('RightSidePartialComponent', () => {
  let component: RightSidePartialComponent;
  let fixture: ComponentFixture<RightSidePartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSidePartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSidePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
