import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { SetCalenderComponent } from './set-calender/set-calender.component';
import { ApprisalDiscussionComponent } from './apprisal-discussion/apprisal-discussion.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrServicesService } from '../services/hr-services.service';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    ListEmployeesComponent,
    SetCalenderComponent,
    ApprisalDiscussionComponent,
    CreateEmployeeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HrRoutingModule,
    AgGridModule.withComponents([]),
    BsDatepickerModule.forRoot(),
    GooglePlaceModule,
    FullCalendarModule,
  ],
  providers: [HrServicesService,BsDatepickerConfig],
  
})
export class HrModule {}
