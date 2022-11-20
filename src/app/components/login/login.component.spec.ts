import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame8Component } from './frame8.component';

describe('Frame8Component', () => {
  let component: Frame8Component;
  let fixture: ComponentFixture<Frame8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
