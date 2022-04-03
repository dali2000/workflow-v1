import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  admins:any;
  ngOnInit(): void {
    this.getAllAdmin()
  }

  getAllAdmin() {
    this.http.get('http://localhost:3000/user/users').subscribe(res => {
      this.admins = res;
      console.log(res);
    });
  }

}
