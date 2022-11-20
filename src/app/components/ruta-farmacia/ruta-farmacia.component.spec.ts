import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame17Component } from './frame17.component';

describe('Frame17Component', () => {
  let component: Frame17Component;
  let fixture: ComponentFixture<Frame17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
