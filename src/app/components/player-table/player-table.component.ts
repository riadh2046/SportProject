import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  playersTab:any=[];

  constructor(private router:Router,private pService: PlayerService) { }

  ngOnInit(): void {
    // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]')
    this.pService.getAllPlayer().subscribe((response)=>{this.playersTab = response.players;}
  );

  }


  goToInfo(id:number){
    // alert(id);
    this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`editPlayer/${id}`]);
  }

  deletePlayer(id:number){

    // for (let i = 0; i < this.playersTab.length; i++) {
    //   if (id == this.playersTab[i].id ) {
    //     this.playersTab.splice(i,1);
    //     break
        
    //   }
      
    // }
    // localStorage.setItem('players',JSON.stringify(this.playersTab));
    this.pService.deletePlayerById(id).subscribe(
      (response)=>{
        console.log("here response after delete",response);
        this.pService.getAllPlayer().subscribe(
          (response)=>{
            this.playersTab=response.players;
          }
        )
        
      });
  
  }
}
