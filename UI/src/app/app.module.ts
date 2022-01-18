import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AuthgurdserviceService } from './authgurdservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleformComponent } from './examples/form/sampleform/sampleform.component';
import { SamplegetdataComponent } from './examples/samplegetdata/samplegetdata.component';
import { SampleformdataservicesService } from './services/sampleformdataservices.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BindingdataComponent } from './examples/bindingdata/bindingdata.component';
import { AgGridModule } from 'ag-grid-angular';
import { AggridComponent } from './examples/aggrid/aggrid.component';
import { ServiceoperatorsComponent } from './examples/serviceoperators/serviceoperators.component';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';
import { HrModule } from './hr/hr.module';
import { HrServicesService } from './services/hr-services.service';
import { RxjsoperatorsComponent } from './examples/rxjsoperators/rxjsoperators.component';
import { InputoutputComponent } from './examples/inputoutput/inputoutput.component';
import { ParentIOComponent } from './examples/parent-io/parent-io.component';
import { LifecyclehooksComponent } from './examples/lifecyclehooks/lifecyclehooks.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule,BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AuthGuard } from './authentication.guard';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { CustomInterceptor } from './intreceptor/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SampleformComponent,
    SamplegetdataComponent,
    BindingdataComponent,
    AggridComponent,
    ServiceoperatorsComponent,
    RxjsoperatorsComponent,
    InputoutputComponent,
    ParentIOComponent,
    LifecyclehooksComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EmployeeModule,
    ManagerModule,
    HrModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents([]),
    NgbModule,
    BsDatepickerModule.forRoot(),
    GooglePlaceModule
  ],
 providers: [
    AuthgurdserviceService,
    SampleformdataservicesService,
    AuthGuard,HrServicesService,
    BsDatepickerConfig,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
  exports: [HomeComponent],
})
export class AppModule {}
