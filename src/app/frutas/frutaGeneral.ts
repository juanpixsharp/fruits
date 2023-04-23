import { HttpClient } from "@angular/common/http";
import { FrutaDetalle } from "./frutaDetalle";

export class FrutaGeneral{
    nombre: string = '';
    prod_url: string = '';
    detalles: FrutaDetalle = new FrutaDetalle();

    constructor(nombre:string, prod_url:string){
        this.nombre=nombre;
        this.prod_url=prod_url;
    }

}