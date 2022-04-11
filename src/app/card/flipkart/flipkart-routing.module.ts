import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipkartComponent } from './flipkart.component';

const routes: Routes = [{ path: '', component: FlipkartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipkartRoutingModule { }
