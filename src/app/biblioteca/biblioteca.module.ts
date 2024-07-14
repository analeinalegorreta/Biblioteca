import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaPaginaComponent } from './pages/biblioteca-pagina/biblioteca-pagina.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { TablaPageComponent } from './pages/tabla-page/tabla-page.component';
import { MaterialModule } from '../material/material.module';
import { LibroCardComponent } from './components/libro-card/libro-card.component';
import { ImgFaltantePipe } from './pipe/img-faltante.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ImgFaltanteComprasPipe } from './pipe/img-faltante-compras.pipe';


@NgModule({
  declarations: [
    BibliotecaPaginaComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    SelectPageComponent,
    TablaPageComponent,
    LibroCardComponent,
    ImgFaltantePipe,
    ModalComponent,
    ImgFaltanteComprasPipe
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BibliotecaModule { }
