import { BootstrapOptions, Component } from '@angular/core';
import { FrutasService } from './frutas/frutas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cargandoFrutas:boolean = true;

  constructor(private frutasService: FrutasService){
  }


  estaCargando(): boolean{
    return this.frutasService.cargando;
  }

}
