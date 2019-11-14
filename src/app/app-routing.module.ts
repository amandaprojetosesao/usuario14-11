import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro-salvar', loadChildren: './cadastro/cadastro-salvar/cadastro-salvar.module#CadastroSalvarPageModule' },
  { path: 'autorizar-salvar', loadChildren: './autorizar/autorizar-salvar/autorizar-salvar.module#AutorizarSalvarPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },  { path: 'autorizar-salvar', loadChildren: './autorizar/autorizar-salvar/autorizar-salvar.module#AutorizarSalvarPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
