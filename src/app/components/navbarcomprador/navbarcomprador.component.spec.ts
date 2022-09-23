import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcompradorComponent } from './navbarcomprador.component';

describe('NavbarcompradorComponent', () => {
  let component: NavbarcompradorComponent;
  let fixture: ComponentFixture<NavbarcompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
