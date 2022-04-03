import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  form={
    email:'',
    password:'',
    
  }
  confrimPassword =''
  message = ""
  message1 = ""
  test =false
  test1 =false
 
  ngOnInit(): void {
    this.test = false
    this.test1 = false
    this.message1 = ""
    this.message = ""
  }

  login(){
    if(this.form.password==""){
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message)
    }
    else{
      this.message1 = ""
      this.test1 = false
      
    }
    if(this.confrimPassword==""){
      this.message = "Please confirm your password"
      this.test =true
      console.log(this.message)
    }
     else if(this.form.password != this.confrimPassword){
      this.message = "Please confirm your password"
      this.test =true
      console.log(this.message)
    
    }
    else{
      console.log(this.form)
      this.test =false
      this.message = ""
      console.log(this.message)
    }
  }

}
