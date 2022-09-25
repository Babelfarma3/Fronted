import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame15Component } from './frame15.component';

describe('Frame15Component', () => {
  let component: Frame15Component;
  let fixture: ComponentFixture<Frame15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
