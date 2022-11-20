import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFarmaciaVentasComponent } from './reporte-farmacia-ventas.component';

describe('ReporteFarmaciaVentasComponent', () => {
  let component: ReporteFarmaciaVentasComponent;
  let fixture: ComponentFixture<ReporteFarmaciaVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteFarmaciaVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteFarmaciaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
