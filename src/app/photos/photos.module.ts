import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';


// aqui fazemos o feature module, um módulo que contém vários componentes que fazem sentido de serem agrupados juntos
@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule
  ]
})
export class PhotosModule {}
