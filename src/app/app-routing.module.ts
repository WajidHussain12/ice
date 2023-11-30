import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path:"admin",loadChildren:()=>import('./AdminComponents/admin-module/admin-module.module').then(mod=>mod.AdminModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
