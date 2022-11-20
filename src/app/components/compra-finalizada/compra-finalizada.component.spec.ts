import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame19Component } from './frame19.component';

describe('Frame19Component', () => {
  let component: Frame19Component;
  let fixture: ComponentFixture<Frame19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
