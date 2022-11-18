import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarfarmacia',
  templateUrl: './navbarfarmacia.component.html',
  styleUrls: ['./navbarfarmacia.component.css']
})
export class NavbarfarmaciaComponent implements OnInit {

  idFarmacia!:any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadId();
  }


  loadId(){
    this.idFarmacia = this.route.snapshot.params['id'];
  }

}
