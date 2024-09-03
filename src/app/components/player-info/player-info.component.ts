import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playersTab:any=[

    {Name:'Messi',Position:'Attaque',Age:36,Number:10},
    




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
