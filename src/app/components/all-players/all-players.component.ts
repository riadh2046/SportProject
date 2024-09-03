import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
  playersTab:any=[

    {Name:'Messi',Position:'Attaque',Age:36,Number:10},
    {Name:'Ronaldo',Position:'Attaque',Age:39,Number:7},
    {Name:'Lukako',Position:'Attaque',Age:38,Number:9},
    {Name:'Messi',Position:'Attaque',Age:23,Number:10},




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
