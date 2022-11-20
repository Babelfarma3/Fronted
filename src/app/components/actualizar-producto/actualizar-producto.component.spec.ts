import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame26Component } from './frame26.component';

describe('Frame26Component', () => {
  let component: Frame26Component;
  let fixture: ComponentFixture<Frame26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
