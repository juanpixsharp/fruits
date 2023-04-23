import {HttpClient} from "@angular/common/http"
import { FrutaGeneral } from "./frutaGeneral"
import { Pagina } from "./paginas";
import { Injectable } from "@angular/core";
import { FrutaDetalle } from "./frutaDetalle";
import { ɵafterNextNavigation } from "@angular/router";

@Injectable()
export class FrutasService{
    frutas:FrutaGeneral[]=[];
    pagina:Pagina= new Pagina();
    cargando:boolean=true;

    constructor(private httpClient: HttpClient){
        this.tomaFrutasWS('');
    }
    

    getUrlBase(){
        return 'https://api.predic8.de';
    }

    tomaFrutasWS(consulta:string){
        this.cargando= true;
        if(consulta===''){consulta='/shop/products/?page=1&limit=3';}
        console.log(this.getUrlBase()+consulta);
        this.httpClient.get<Pagina>(this.getUrlBase()+consulta).subscribe({
            next: (v) =>{
                this.pagina = v;
                this.frutas = [];
                this.pagina.products.forEach(producto => this.frutas.push(new FrutaGeneral(producto.name, producto.product_url)));
                this.cargaDetalles();
            },
            error: (e) => {
                console.log("Error al cargar Frutas desde WS: " + e);
                setTimeout(()=>{this.tomaFrutasWS(consulta);},5000);
            }
        });
    }

    cargaDetalles(){
        this.frutas.forEach(fruta => {
            this.httpClient.get<FrutaDetalle>(this.getUrlBase() + fruta.prod_url).subscribe({
                next: (v) => {fruta.detalles = v;},
                error: (e) => {console.log("Error al cargar detalles de fruta '" + fruta.nombre + "', detalles: " + e);}
            });
        });
        this.cargando = false;
    }
}