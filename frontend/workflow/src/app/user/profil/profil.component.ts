import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  id:any
  user:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getProfile()
  }

  getProfile(){
    this.http.get('http://localhost:3000/user/getUser/'+this.id).subscribe(res => {
      this.user = res
      console.log(res);
    });
  }

}
