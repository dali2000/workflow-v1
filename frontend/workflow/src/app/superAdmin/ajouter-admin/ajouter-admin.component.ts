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
  message2 = ""
  message3 = ""
  test =false
  test1 =false
  test2=false
  test3=false


  ngOnInit(): void {
  
  }
AddAdmin(){
 

  if(this.form.firstName==""){
    this.message2 = "firstName is required"
    this.test2 =true
    console.log(this.message2)
  }
  else  {
    this.message2 = ""
      this.test2 = false
  } 

  if(this.form.lastName==""){
    this.message3 = "lastName is required"
    this.test3 =true
    console.log(this.message3)
  }
  else  {
    this.message3 = ""
      this.test3 = false
  } 


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
      console.log(this.message1)
    }
    else{
      this.message1 = ""
      this.test1 = false


      }
      if(this.test==false && this.test1==false && this.test2==false && this.test3==false){
    console.log(this.form)
     this.http.post('http://localhost:3000/user/addUser',this.form).subscribe(res => {
    console.log(res)
  });

      }
  }
}
