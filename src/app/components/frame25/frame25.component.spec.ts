import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame25Component } from './frame25.component';

describe('Frame25Component', () => {
  let component: Frame25Component;
  let fixture: ComponentFixture<Frame25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
