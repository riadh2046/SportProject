import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
matchesTitle:string ='Matches' ;
teamsTitle:string ='Teams' ;
playersTitle:string ='Player' ;
StadiumTitle:string ='Stadium' ;
titles:any=['Matches','Teams','Players','Stadiums'];
title:string='Admin'
croco:string='hello croco coder'
actualDate:Date=new Date();





  constructor() { }

  ngOnInit(): void {
  }

}
