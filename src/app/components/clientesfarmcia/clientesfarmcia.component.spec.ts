import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesfarmciaComponent } from './clientesfarmcia.component';

describe('ClientesfarmciaComponent', () => {
  let component: ClientesfarmciaComponent;
  let fixture: ComponentFixture<ClientesfarmciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesfarmciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesfarmciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
