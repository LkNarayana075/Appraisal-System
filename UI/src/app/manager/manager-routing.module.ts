import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { CreateObjectiveComponent } from './create-objective/create-objective.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ManagerRatingComponent } from './manager-rating/manager-rating.component';
import { AssignObjectiveComponent } from './assign-objective/assign-objective.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-employees',
    pathMatch: 'full',
  },
  {
    path: 'list-employees',
    component: ListemployeeComponent,
  },
  {
    path: 'createObjective',
    component: CreateObjectiveComponent,
  },
  {
    path: 'objectives',
    component: ObjectiveComponent,
  },
  {
    path: 'manager-rating/:id',
    component: ManagerRatingComponent,
  },
  {
    path: 'AssignObjective',
    component: AssignObjectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
