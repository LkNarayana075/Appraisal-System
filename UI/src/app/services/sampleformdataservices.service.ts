import { Injectable } from '@angular/core';
import { sampleformdata } from '../examples/models/sampleform';
import { HttpUrls } from '../shared/HttpUrls';
import { DataclientService } from './dataclient.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SampleformdataservicesService {
  length: number;
  // getdesignationList() {
  //   throw new Error('Method not implemented.');
  // }
  // getdepartmentList() {
  //   throw new Error('Method not implemented.');
  // }
  // getRolesList() {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private dataclient: DataclientService) {}

  // sending  sample formdata
  sendingsampleformdata(formdata: any) {
    return this.dataclient.post(HttpUrls.REGISTERUSERS, formdata);
  }
  samplegetdata() {
    return this.dataclient.get(HttpUrls.REGISTERUSERS);
  }
  getmapdata() {
    return this.dataclient.get(HttpUrls.OPERATORDATA);
  }
  getManagerEmployees() {
    return this.dataclient.get(HttpUrls.PYTHON_MANAGER_EMPLOYEES_LIST);
  }
  getemployees() {
    return this.dataclient.get(HttpUrls.PYTHON_MANAGER_TOKEN);
  }
  logindetails(data: any) {
    return this.dataclient.post(HttpUrls.PYTHON_LOGIN_DETAILS, data);
  }
  managertoken() {
    return this.dataclient.get(HttpUrls.PYTHON_MANAGER_TOKEN);
  }
  forgotdetails(data: any) {
    return this.dataclient.post(HttpUrls.PYTHON_FORGOT_DETAILS, data);
  }
  createObjective(formdata: any) {
    // return this.dataclient.post(HttpUrls.PYTHON_CREATE_OBJECTIVE, formdata);
  }
  getobjectivelist(data: any) {
    return this.dataclient.get(HttpUrls.OBJECTIVE_LIST);
  }
  getdiscussionlist(){
    return this.dataclient.get(HttpUrls.GET_DISCUSSION_EMP_LIST)
  }

  getemployeedetails(empdata:any){
    return this.dataclient.get(HttpUrls.GET_EMP_DETAILS + '/' + empdata)
  }

  pythonListOfEmployees(){
    return this.dataclient.get(HttpUrls.PYTHON_HR_EmployeeList);
  }

  setScheduleDate(data:any){
    return this.dataclient.post(HttpUrls.SET_SCHEDULED_DATE, data);
  }

  getObjectives(){
    return this.dataclient.get(HttpUrls.GET_OBJ_LIST);
  }

  postObjective(data:any){
    return this.dataclient.post(HttpUrls.POST_OBJECTIVE, data);
  }

  editObjective(data:any){
    return this.dataclient.update(HttpUrls.POST_OBJECTIVE, data);
  }

  getActiveCalendar(){
    return this.dataclient.get(HttpUrls.GET_ACTIVE_CALENDAR_DASHBOARD);
  }
  pythonManagerListOfEmployees(){
    return this.dataclient.get(HttpUrls.PYTHON_MANAGER_EMPLOYEE_LIST);
  }

  pythonAssignManagers(){
    return this.dataclient.get(HttpUrls. PYTHON_ASSIGN_MANAGER);
  }
  pythonassignobjectives(data:any){
    return this.dataclient.post(HttpUrls. PYTHON_ASSIGN_OBJECTIVES,data);
  }

  assignToManager(data:any){
    return this.dataclient.post(HttpUrls. ASSIGN_MANAGER, data);
  }
  disqualify(data:any){
    return this.dataclient.update(HttpUrls. DISQUALIFY, data);
  }
  updateobj(data: any){

    return this.dataclient.update(HttpUrls.UPDATE ,data);
  }
  deleteobj(objective_id:string){
    return this.dataclient.delete(HttpUrls.DELETE +objective_id);
  }
  createEmployee(data:any){
    return this.dataclient.post(HttpUrls. CREATE_EMPLOYEE, data);
  }
  
  getdepartmentList():Observable<any>{
    return this.dataclient.get(HttpUrls. GET_DEPARTMENT_LIST);
  }
  

  getdesignationList():Observable<any>{
    return this.dataclient.get(HttpUrls. GET_DESIGNATION_LIST);
  }

  getRolesList():Observable<any>{
    return this.dataclient.get(HttpUrls. GET_ROLES_LIST);
  }
  postRaiseDiscussion(data:any){
    return this.dataclient.post(HttpUrls.PYTHON_RAISE_DISCUSSION, data);
  }
  employeesByDepartment(emp:any){
    return this.dataclient.get(HttpUrls.PYTHON_HR_EmployeeList_BY_DEPT + '/' + emp)
  }

  postSelfRating(data:any){
    return this.dataclient.post(HttpUrls.POST_SELF_RATING, data);
  }
  emailValidation(data:any){
    return this.dataclient.post(HttpUrls.EMAIL_VALIDATION, data);
  }

  mobileNumValidation(data:any){
    return this.dataclient.post(HttpUrls.MOBILE_NUMBER_VALIDATION, data);
  }

  appraiseeIdValidation(data:any){
    return this.dataclient.post(HttpUrls.APPRAISEE_ID_VALIDATION, data);
  }

  createNewCalendar(data:any){
    return this.dataclient.post(HttpUrls.CREATE_CALENDAR, data);
  }





  postManagerRating(data:any){
    return this.dataclient.post(HttpUrls.POST_MANAGER_RATING, data);
  }

  getDashboardMngrList(){
    return this.dataclient.get(HttpUrls.DASHBOARD_MANAGER_LIST);
  }
}
