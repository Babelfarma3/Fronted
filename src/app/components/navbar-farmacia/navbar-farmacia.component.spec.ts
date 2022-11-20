import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfarmaciaComponent } from './navbarfarmacia.component';

describe('NavbarfarmaciaComponent', () => {
  let component: NavbarfarmaciaComponent;
  let fixture: ComponentFixture<NavbarfarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarfarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
