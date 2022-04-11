import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipkartRoutingModule } from './flipkart-routing.module';
import { FlipkartComponent } from './flipkart.component';


@NgModule({
  declarations: [
    FlipkartComponent
  ],
  imports: [
    CommonModule,
    FlipkartRoutingModule
  ]
})
export class FlipkartModule { }
