import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaventasComponent } from './farmaciaventas.component';

describe('FarmaciaventasComponent', () => {
  let component: FarmaciaventasComponent;
  let fixture: ComponentFixture<FarmaciaventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaventasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmaciaventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
