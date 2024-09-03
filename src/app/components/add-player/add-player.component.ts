import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  //Form ID
  playerForm!: FormGroup;
  //object
  player: any = {};
  teams:any = [];
  
  
  
  constructor(
    private pService:PlayerService,
    private tService:TeamService) {}

  ngOnInit(): void {
    //Get all teams from Data BAse
    this.tService.getAllTeam().subscribe(
      (response)=>{
      console.log("here teams from BE",response.teams);
     this.teams = response.teams; 
    }
  ) 
  }
  //Add player

  addPlayer() {
    console.log("Add Match BTN Clicked",this.player);
    this.pService.addPlayer(this.player).subscribe(
      (response)=>{
      console.log("here response after adding player",response.msg);
     
      
    }
  )
   
}

    // console.log('ADD Match BTN clicked', this.layer);
    // let players = JSON.parse(localStorage.getItem("players") || "[]");
    // this.player.id = this.generateId(players);
    //     players.push(this.player);
    //     localStorage.setItem("players", JSON.stringify(players));
        
  
  generateId(T:any){
    let max;
    if (T.length ==0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 1; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
          
        }
        
      }
    }
    return max + 1;
  }
}
