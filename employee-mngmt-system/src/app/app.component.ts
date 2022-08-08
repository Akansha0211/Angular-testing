import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-mngmt-system';
  firstName : string = 'Akansha';
  lastName : string = 'Saxena';
  isdisabled : boolean = false;
  btnStyle :string = 'color:red'

  handleClick=()=>alert("clicked on button")
  
}
