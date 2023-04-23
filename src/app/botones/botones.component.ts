import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../frutas/frutas.service';
import { Pagina } from '../frutas/paginas';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  pagina:Pagina = new Pagina();
  sigPag:boolean = false;
  prePag:boolean = false;

  constructor(private frutasService:FrutasService){
  }

  ngOnInit(): void {
    this.pagina = this.frutasService.pagina;
    this.sigPag = (this.pagina.meta.next_url!=null && this.pagina.meta.next_url != '');
    this.prePag = (this.pagina.meta.previous_url !=null && this.pagina.meta.previous_url != '');
  }

  siguientePagina(){
    this.frutasService.tomaFrutasWS(this.pagina.meta.next_url);
  }

  anteriorPagina(){
    this.frutasService.tomaFrutasWS(this.pagina.meta.previous_url);
  }

  iniciaPagina(){
    this.frutasService.tomaFrutasWS('');
  }
}
