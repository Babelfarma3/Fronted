import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame11Component } from './frame11.component';

describe('Frame11Component', () => {
  let component: Frame11Component;
  let fixture: ComponentFixture<Frame11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
