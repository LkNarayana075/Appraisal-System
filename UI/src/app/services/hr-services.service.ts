import { Injectable } from '@angular/core';
import { HttpUrls } from '../shared/HttpUrls';
import { DataclientService } from './dataclient.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrServicesService {

  constructor(private DataService :DataclientService ) { }
listOfEmployees(){
  return this.DataService.get(HttpUrls.EmployeeList);
}
bulkupload(data: any)
{
  return this.DataService.post(HttpUrls.BULKUPLOAD, data);
}
// listOfEmployees(){
//   return this.DataService.get(HttpUrls.EmployeeList);
// }
}
