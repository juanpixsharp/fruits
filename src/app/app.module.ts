import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { FrutasService } from './frutas/frutas.service';
import { BotonesComponent } from './botones/botones.component';
import { HttpClientModule } from '@angular/common/http';
import { CargandoComponent } from './cargando/cargando.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    BotonesComponent,
    CargandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FrutasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
