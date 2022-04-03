import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.message = ""
    this.message1 = ""
    this.test =false
    this.test1 =false
    this.check = true
  }
  form={
    email:'',
    password:'',
    role:'employee'
    }

  
  message = ""
  message1 = ""
  test =false
  test1 =false
  check = true
  AddEmployee(){

    if(this.form.email==""){
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
        if(this.test1 == false && this.test==false){
          this.check = false
        }
        else{
          this.check = true
        }
      console.log(this.form)
    }
}
