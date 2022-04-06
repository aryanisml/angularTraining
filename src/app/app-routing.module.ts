import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './about/product/product.component';
import { SubscriptionComponent } from './about/subscription/subscription.component';
import { ProductDetailsComponent } from './about/product-details/product-details.component';

const routes : Routes = [
     {path: 'profile', loadChildren:()=> import('./profile/profile.module').then(mod=> mod.ProfileModule)},  /// lazy loading 

     {path: '', redirectTo:'/home', pathMatch: 'full'},
     {path: 'home' , component: HomeComponent},
     {path: 'about', component : AboutComponent,
      children: [
        {
          path : 'product', component: ProductComponent,
          
        },{
          path :'subscription', component:SubscriptionComponent
        },
        {
          path:'product/:id', component: ProductDetailsComponent
        }
      ]
  }
];

/// Eagrly loading ;
/// lazy loading ;


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
