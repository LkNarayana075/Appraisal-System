import { environment } from '../../environments/environment';
export class HttpUrls {
  static getUsersByRoleCount(getUsersByRoleCount: any) {
    throw new Error('Method not implemented.');
  }
  /*---------- Java API ------------ */
  public static REGISTERUSERS = `${environment.serviceJavaUrl}`;

  /*---------- .NET Api ------------ */
  public static DOTNET_REGISTER_USERS = `${environment.servicedotnetUrl}users`;
  public static EmployeeList = `${environment.servicepythonUrl}employees`;
  // public static EmployeeList = `${environment.serviceexampleUrl}employees`;

  
  /*---------- Python Api ------------ */

  public static PYTHON_MANAGER_EMPLOYEES_LIST = `${environment.servicepythonUrl}employees`;
  public static PYTHON_MANAGER_TOKEN = `${environment.servicepythonUrl}employee_list_manager`;
  public static BULKUPLOAD = `${environment.servicepythonUrl}bulk_upload`;
  public static GET_DISCUSSION_EMP_LIST = `${environment.servicepythonUrl}discussion_raised_emp`;
  public static GET_EMP_DETAILS = `${environment.servicepythonUrl}employee`;
  public static SET_SCHEDULED_DATE = `${environment.servicepythonUrl}scheduled_date`;
  public static PYTHON_HR_EmployeeList = `${environment.servicepythonUrl}employee_list_hr`;
  public static GET_OBJ_LIST = `${environment.servicepythonUrl}objective`;
  public static POST_OBJECTIVE = `${environment.servicepythonUrl}objective`;
  public static GET_ACTIVE_CALENDAR_DASHBOARD = `${environment.servicepythonUrl}active_calendar`;
  public static PYTHON_MANAGER_EMPLOYEE_LIST = `${environment.servicepythonUrl}employee_list_manager`;
  public static PYTHON_ASSIGN_OBJECTIVES = `${environment.servicepythonUrl}assign_objectives`;
  public static PYTHON_ASSIGN_MANAGER = `${environment.servicepythonUrl}managers_list`;
  public static ASSIGN_MANAGER = `${environment.servicepythonUrl}assign_manager`;
  public static DISQUALIFY = `${environment.servicepythonUrl}disqualify`;
  public static UPDATE = `${environment.servicepythonUrl}objective`;
  public static DELETE = `${environment.servicepythonUrl}objective/`;
  public static GET_DEPARTMENT_LIST = `${environment.servicepythonUrl}departments`;
  public static GET_DESIGNATION_LIST = `${environment.servicepythonUrl}designations`;
  public static GET_ROLES_LIST = `${environment.servicepythonUrl}roles`;
  public static CREATE_EMPLOYEE = `${environment.servicepythonUrl}employee`;
  public static PYTHON_RAISE_DISCUSSION = `${environment.servicepythonUrl}need_discussion`;
  public static PYTHON_HR_EmployeeList_BY_DEPT = `${environment.servicepythonUrl}employee_list`;
  public static POST_SELF_RATING = `${environment.servicepythonUrl}selfrating`;
  public static EMAIL_VALIDATION = `${environment.servicepythonUrl}email_validation`;
  public static MOBILE_NUMBER_VALIDATION = `${environment.servicepythonUrl}mobile_num_validation`;
  public static APPRAISEE_ID_VALIDATION = `${environment.servicepythonUrl}appraiseeid_validation`;
  public static CREATE_CALENDAR = `${environment.servicepythonUrl}calendar`;
  public static POST_MANAGER_RATING = `${environment.servicepythonUrl}manager_rating`;
  public static DASHBOARD_MANAGER_LIST = `${environment.servicepythonUrl}dashboard_managers_list`;


  /* Other API */

  // Login
  public static PYTHON_LOGIN_DETAILS = `${environment.servicepythonUrl}login`;
  public static PYTHON_FORGOT_DETAILS = `${environment.servicepythonUrl}reset_password`;
  public static OBJECTIVE_LIST = `${environment.servicepythonUrl}objective`;

  public static EXAMPLE_REGISTER_USERS = `${environment.serviceexampleUrl}employees`;
  public static OPERATORDATA = `https://swapi.dev/api/people/1/`;

}
