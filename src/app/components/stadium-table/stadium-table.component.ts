import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  
  stadiumsTab:any=[

    {ID:1,Name:'Rades',Country:'Tunise',Capacity:90000},
    {ID:2,Name:'Wembley',Country:'London',Capacity:90000},
    {ID:3,Name:'Bernabeu',Country:'Madrid',Capacity:85000},
    {ID:4,Name:'Camp Nou',Country:'Barcelone',Capacity:99000}

  ];



  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

}
