import { PhotoComponent } from '../photos/photo/photo.component';
import { NgModule } from '@angular/core';

// aqui fazemos o feature module, um módulo que contém vários componentes que fazem sentido de serem agrupados juntos
@NgModule({
  declarations: [PhotoComponent ],
  exports: [PhotoComponent]
})


export class PhotosModule {}
