import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagerRoutingModule } from './manager-routing.module';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateObjectiveComponent } from './create-objective/create-objective.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ManagerRatingComponent } from './manager-rating/manager-rating.component';
import { AssignObjectiveComponent } from './assign-objective/assign-objective.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniquePipe } from '../pipe/unique';
import { CustomInterceptor } from '../intreceptor/httpconfig.interceptor';
@NgModule({
  declarations: [
    ListemployeeComponent,
    UniquePipe,
    CreateObjectiveComponent,
    ObjectiveComponent,
    ManagerRatingComponent,
    AssignObjectiveComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
})
export class ManagerModule {}
