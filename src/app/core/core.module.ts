import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    //Qual é a classe que vai usar quando o http interceptor ser utilizado
    //vai ser a classe que criei RequestInterceptor
    useClass: RequestInterceptor,
    multi: true
  }]
})

export class CoreModule {}
