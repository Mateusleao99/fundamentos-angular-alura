import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    //Em loadChildren, solicitaremos que se carregue o módulo sob demanda
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve:{
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes,{ useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
