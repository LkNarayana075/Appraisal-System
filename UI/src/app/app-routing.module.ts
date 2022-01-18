import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AuthGuard } from './authentication.guard';
import { SamplegetdataComponent } from './examples/samplegetdata/samplegetdata.component';
import { SampleformComponent } from './examples/form/sampleform/sampleform.component';
import { BindingdataComponent } from './examples/bindingdata/bindingdata.component';
import { AggridComponent } from './examples/aggrid/aggrid.component';
import { ServiceoperatorsComponent } from './examples/serviceoperators/serviceoperators.component';
import { RxjsoperatorsComponent } from './examples/rxjsoperators/rxjsoperators.component';
import { ParentIOComponent } from './examples/parent-io/parent-io.component';
import { InputoutputComponent } from './examples/inputoutput/inputoutput.component';
import { LifecyclehooksComponent } from './examples/lifecyclehooks/lifecyclehooks.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: 'login',
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
        // loadChildren: './employee/employee.module#EmployeeModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'manager',
        loadChildren: () =>
          import('./manager/manager.module').then((m) => m.ManagerModule),
        // loadChildren: './manager/manager.module#ManagerModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'hr',
        loadChildren: () => import('./hr/hr.module').then((m) => m.HrModule),
        //loadChildren: './hr/hr.module#HrModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'getdata',
        component: SamplegetdataComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'exform',
        component: SampleformComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'binddata',
        component: BindingdataComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'aggrid',
        component: AggridComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'aggridservice',
        component: ServiceoperatorsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'rxjs',
        component: RxjsoperatorsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'parent',
        component: ParentIOComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'child',
        component: InputoutputComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'lifecycle',
        component: LifecyclehooksComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '404', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/404' },
  //{ path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routing = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
