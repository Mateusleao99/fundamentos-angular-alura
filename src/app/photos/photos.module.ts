import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from '../photos/photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

// aqui fazemos o feature module, um módulo que contém vários componentes que fazem sentido de serem agrupados juntos
@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule {}
