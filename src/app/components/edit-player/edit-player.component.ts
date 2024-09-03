import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
playerForm!: FormGroup;
player:any = {};
playerId:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private Pservice: PlayerService) { }

  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.params['id'];
    this.Pservice.getPlayerById(this.playerId).subscribe((data)=>{
      console.log("Here data From BE", data);
      this.player = data.player;
      
    });
    // let playersTab = JSON.parse(localStorage.getItem('players') ||'[]');
    //   for (let i = 0; i < playersTab.length; i++) {
    //     if (playersTab[i].id == this.playerId) {
    //       this.player = playersTab[i];
    //       break;
    //     } 
    //   }

  }
  editPlayer(){
  //   let playersTab = JSON.parse(localStorage.getItem('players') ||'[]');
  //   for (let i = 0; i < playersTab.length; i++) {
  //     if (playersTab[i].id == this.playerId) {
  //       playersTab[i] = this.player;
  //       break;
  //     } 
  //   }
  // localStorage.setItem('players',JSON.stringify(playersTab));
  // this.router.navigate(['admin']);
  this.Pservice.editPlayer(this.player).subscribe((data)=>{
    console.log("the player is edited :",data.msg);
  });
}

  

}
