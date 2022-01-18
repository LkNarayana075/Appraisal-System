import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerRatingComponent } from './manager-rating/manager-rating.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
  {
    path: 'manager-rating',
    component: ManagerRatingComponent,
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
