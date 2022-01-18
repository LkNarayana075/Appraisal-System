import { Injectable } from '@angular/core';
import { HttpUrls } from '../shared/HttpUrls';
import { DataclientService } from './dataclient.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerEmpListService {

  constructor(private DataService :DataclientService) { }
  listOfEmployees(){
    return this.DataService.get(HttpUrls.EmployeeList);
  }
}
