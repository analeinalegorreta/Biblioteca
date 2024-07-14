import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

{
  path:'biblioteca',
  loadChildren:()=>import('./biblioteca/biblioteca.module').then(m=>m.BibliotecaModule),
},
{
  path:'404',
 component:Error404PageComponent,
},
{
  path:'',
  redirectTo:'biblioteca',
  pathMatch:'full'
},
{
  path:'**',
  redirectTo:'404',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
