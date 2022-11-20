import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame22Component } from './frame22.component';

describe('Frame22Component', () => {
  let component: Frame22Component;
  let fixture: ComponentFixture<Frame22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
