import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProductosVendidosComponent } from './reporte-productos-vendidos.component';

describe('ReporteProductosVendidosComponent', () => {
  let component: ReporteProductosVendidosComponent;
  let fixture: ComponentFixture<ReporteProductosVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteProductosVendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteProductosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
