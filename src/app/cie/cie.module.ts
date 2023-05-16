import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CieRoutingModule } from './cie-routing.module';
import { CieComponent } from './container/cie.component';
import { CargaSaeComponent } from './components/carga-sae/carga-sae.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PrimengModule } from '../shared/primeng.module';


@NgModule({
  declarations: [
    CieComponent,
    CargaSaeComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    CommonModule,
    CieRoutingModule,
    FormsModule,
    PrimengModule
  ]
})
export class CieModule { }
