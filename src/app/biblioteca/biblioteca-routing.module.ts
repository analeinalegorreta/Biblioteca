import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../biblioteca/pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BibliotecaPaginaComponent } from './pages/biblioteca-pagina/biblioteca-pagina.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { TablaPageComponent } from './pages/tabla-page/tabla-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {
        path:'new-libro', component:NewPageComponent
      },
      {
        path:'search', component:SearchPageComponent
      },
      {
        path:'edit/:id', component:NewPageComponent
      },
      {
        path:'list', component:ListPageComponent
      },
      {
        path:'select', component:SelectPageComponent
      },
      {
        path:'tabla', component:TablaPageComponent
      },
      {
        path:':id', component:BibliotecaPaginaComponent
      },
      {
        path:'**', redirectTo:'list'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
