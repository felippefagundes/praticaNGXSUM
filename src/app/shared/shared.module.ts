import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
