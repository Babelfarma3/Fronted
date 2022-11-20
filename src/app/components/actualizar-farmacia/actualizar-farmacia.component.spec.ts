import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarfarmaciaComponent } from './actualizarfarmacia.component';

describe('ActualizarfarmaciaComponent', () => {
  let component: ActualizarfarmaciaComponent;
  let fixture: ComponentFixture<ActualizarfarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarfarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarfarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
