import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ename:string=''
  constructor(private _empService:EmployeeService) 
  { }

  ngOnInit(): void {
    //console.log(this._empService.getName());
    this.ename = this._empService.getName();
  }

}
