import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ApprisalDiscussionComponent } from './apprisal-discussion/apprisal-discussion.component';
import { SetCalenderComponent } from './set-calender/set-calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'listemployees',
    component: ListEmployeesComponent,
  },
  {
    path: 'createEmployee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'apprisalDiscussion',
    component: ApprisalDiscussionComponent,
  },
  {
    path: 'setCalender',
    component: SetCalenderComponent,
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
