import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empname:string='Radhe Shyam'

  constructor() { }

  public getName():string
  {
    return this.empname;
  }
  
}
