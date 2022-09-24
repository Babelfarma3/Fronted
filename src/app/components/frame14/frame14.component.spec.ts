import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame14Component } from './frame14.component';

describe('Frame14Component', () => {
  let component: Frame14Component;
  let fixture: ComponentFixture<Frame14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
