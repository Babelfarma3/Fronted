import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-frame22',
  templateUrl: './frame22.component.html',
  styleUrls: ['./frame22.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class Frame22Component implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['ProblemasDeSaludComunes'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  ProblemasDeSaludComunes: string;
  description1: string;
  description2: string;
  description3: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    ProblemasDeSaludComunes: 'Asma',
    description1: "- Aerosol Inhalación Bucal",
    description2: "- Bunedosida 200mcg Inhlador",
    description3: " ",
  },
  {
    ProblemasDeSaludComunes: "Dolor de Cabeza",
    description1: "- Aspirina",
    description2: "- Paracetamol",
    description3: "- Ibuprofeno",
  },
  {
    ProblemasDeSaludComunes: 'Bronquitis Aguda',
    description1: "- Dipirona",
    description2: "- Ibuprofeno ",
    description3: "- Amoxicilina",
  },
  {
    ProblemasDeSaludComunes: 'Covid - 19 / Coronavirus',
    description1: "- Tylenol",
    description2: "- Motrin",
    description3: " ",
  },
  {
    ProblemasDeSaludComunes: 'Dolor de garganta',
    description1: "- Amoxixilina",
    description2: "- Ibuprofeno",
    description3: "- Paracetamol",
  },
];
