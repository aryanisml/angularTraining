import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
      path: '',
      component: ProfileComponent
    },
    {
      path : 'company',
      component : CompanyComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
