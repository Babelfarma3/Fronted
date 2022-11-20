import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame7Component } from './frame7.component';

describe('Frame7Component', () => {
  let component: Frame7Component;
  let fixture: ComponentFixture<Frame7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
