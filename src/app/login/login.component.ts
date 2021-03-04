import { Component, OnInit } from '@angular/core';
import { Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login: Login = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  
  }

}
