import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  form={
    Email:'',
    password:'',
    role:'',
    firstName:'',
    lastName:'',
    }

  
  message = ""
  message1 = ""
  test =false
  test1 =false

  ngOnInit(): void {
  
  }
AddAdmin(){
  this.http.post('http://localhost:3000/user/addUser',this.form).subscribe(res => {
    console.log(res)
  });
  if(this.form.Email==""){
    this.message = "Email is required"
    this.test =true
    console.log(this.message)
  }
  else  {
    this.message = ""
      this.test = false
  } 

    if(this.form.password==""){
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message)
    }
    else{
      this.message1 = ""
      this.test1 = false


      }
    console.log(this.form)
  }
}
