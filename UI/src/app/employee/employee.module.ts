import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ManagerRatingComponent } from './manager-rating/manager-rating.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagerRatingComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }

