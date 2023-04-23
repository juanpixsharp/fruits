import { Component, OnInit } from '@angular/core';
import { FrutasService } from './frutas.service';
import { FrutaGeneral } from './frutaGeneral';
import { FrutaDetalle } from './frutaDetalle';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

    frutas: FrutaGeneral[]=[];
    url_base:string='';


    constructor(private frutasService: FrutasService){
    }

    ngOnInit(): void {
      this.frutas = this.frutasService.frutas;
      this.url_base = this.frutasService.getUrlBase();
    }
}
