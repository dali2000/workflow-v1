import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  user={
    Email:'',
    Password:'',
  }
  ngOnInit(): void {
  }

  message = ""
  message1 = ""

  test = false
  test1 = false

  

}
