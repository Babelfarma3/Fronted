import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame18Component } from './frame18.component';

describe('Frame18Component', () => {
  let component: Frame18Component;
  let fixture: ComponentFixture<Frame18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
