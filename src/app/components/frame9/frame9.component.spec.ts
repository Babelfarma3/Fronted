import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame9Component } from './frame9.component';

describe('Frame9Component', () => {
  let component: Frame9Component;
  let fixture: ComponentFixture<Frame9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
