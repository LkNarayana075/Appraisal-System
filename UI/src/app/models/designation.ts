export class Designations
{
   designationList:DesignationList[];
}
export class DesignationList
{
 public designation_id:number;
 public designation_name:string;
 public designation_grade : string | null;
}