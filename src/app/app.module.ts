import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './about/product/product.component';
import { SubscriptionComponent } from './about/subscription/subscription.component';
import { ProductDetailsComponent } from './about/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    SubscriptionComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




///// ng new 
//// npm install @angular/cli