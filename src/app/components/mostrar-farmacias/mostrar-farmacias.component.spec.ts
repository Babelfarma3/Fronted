import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarfarmaciasComponent } from './mostrarfarmacias.component';

describe('MostrarfarmaciasComponent', () => {
  let component: MostrarfarmaciasComponent;
  let fixture: ComponentFixture<MostrarfarmaciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarfarmaciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarfarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
