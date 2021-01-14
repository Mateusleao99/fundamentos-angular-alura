import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './singup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent,
      HomeComponent
     ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule,
      RouterModule,
      HomeRoutingModule
    ]
})
export class HomeModule { }
