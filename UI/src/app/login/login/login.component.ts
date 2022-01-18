import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { logindata, forgotdata } from '../../models/login';
import { SampleformdataservicesService } from '../../services/sampleformdataservices.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NotificationsService } from '../../services/-notifications.service';
import { TitleCasePipe, LowerCasePipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TitleCasePipe, LowerCasePipe],
})
export class LoginComponent implements OnInit {
  username = 'Admin';
  LoginForm: FormGroup;
  Forgotform: FormGroup;
  public loginmodel: logindata;
  public forgotdata: forgotdata;
  userdetails: unknown;
  token: any;
  showlogin: boolean;
  showforgot: boolean;
  role: any;
  errordeatils: any;
  errorMessage: any;
  erroeMsg: any;
  //case:TitleCasePipe;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private notification: NotificationsService,
    private loginservice: SampleformdataservicesService,
    private titlecasePipe: TitleCasePipe,
    private lowerCasePipe: LowerCasePipe
  ) {
    this.loginmodel = new logindata();
    this.forgotdata = new forgotdata();
    //this.case=new TitleCasePipe();
  }

  ngOnInit(): void {
    this.showlogin = true;
    this.showforgot = false;
    this.LoginForm = this.fb.group({
      UserName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          ),
          Validators.email,
        ],
      ],
      password: ['', [Validators.required]],
    });
    // forgot form validation
    this.Forgotform = this.fb.group({
      forgotUserName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          ),
          Validators.email,
        ],
      ],
    });
  }
  prepairedloginobj() {
    const sampleformdata = this.LoginForm.value;
    this.loginmodel.email = sampleformdata.UserName;
    this.loginmodel.password = sampleformdata.password;
  }
  onSubmit() {
    this.prepairedloginobj();
    const sampleformdata = this.LoginForm.value;
    this.loginservice.logindetails(this.loginmodel).subscribe(
      (res) => {
        console.log('userdetails', res);
        this.token = res.access_token;
        this.role = res.role;
        localStorage.setItem('SeesionUser', this.token);
        this.notification.showSuccess('Login successfully !!', 'Success');
        if (this.role == 'Employee') {
          localStorage.setItem('role', this.role);
          localStorage.setItem('name', res.name);
          localStorage.setItem('appraisee_id',res.employee_id)
          localStorage.setItem('designation',res.designation)
          localStorage.setItem('department',res.department)
          localStorage.setItem('Assigned',res.manager_name)
          localStorage.setItem('num',res.id)
          this.route.navigate(['/employee/manager-rating']);
        } else if (this.role == 'Manager') {
          localStorage.setItem('role', this.role);
          localStorage.setItem('name', res.name);
          this.route.navigate(['/manager/list-employees']);
        } else if (this.role == 'HR') {
          localStorage.setItem('name', res.name);
          localStorage.setItem('role', this.role);
          this.route.navigate(['/hr/Dashboard']);
        }
      },
      (error) => {
        if(error.status==0){
          this.notification.showError('Something went wrong.Please try again later', 'Error');
        }else{
        this.notification.showError('Bad credentials', 'Error');
        }
      }
    );
  }

  //forgot

  forgot() {
    this.showlogin = false;
    this.showforgot = true;
  }
  login() {
    this.showlogin = true;
    this.showforgot = false;
  }
  prepairedforgotobj() {
    const forgotdata = this.Forgotform.value;
    this.forgotdata.email = forgotdata.forgotUserName;
    console.log(
      'url',
      this.route['location']._platformLocation.location.origin
    );
    this.forgotdata.base_url =
      this.route['location']._platformLocation.location.origin;
  }
  onforgotSubmit() {
    this.prepairedforgotobj();
    this.loginservice.forgotdetails(this.forgotdata).subscribe(
      (res) => {
        console.log('userdetails', res);
        this.token = res.access_token;
      },
      (error) => {

        this.erroeMsg = this.lowerCasePipe.transform(error.error.detail);
        this.notification.showError(this.erroeMsg, 'Error');
      }
    );
  }
}
