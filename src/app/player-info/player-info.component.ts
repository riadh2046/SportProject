import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playerId:any;
  playerInfo:any ={};

  constructor(private activatedRoute: ActivatedRoute, private mService:PlayerService) { }

  ngOnInit(): void {
    this.playerId= this.activatedRoute.snapshot.params['id'];
    this.mService.getPlayerById(this.playerId).subscribe((data)=>{
      
    });
  }

}
