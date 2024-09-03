import { Component, OnInit } from '@angular/core';
import {jwtDecode} from "jwt-decode";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actualDate:Date=new Date();
user:any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

isLoggedIn(){
  let token = sessionStorage.getItem("token");
  if (token) {
    this.user = jwtDecode(token);
    
  }
  return !!token;
}

logOut(){
  sessionStorage.removeItem("token");
  this.router.navigate(['/']);
}


}
