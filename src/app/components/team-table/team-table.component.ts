import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
}) 
export class TeamTableComponent implements OnInit {
  teamsTab:any=[];

  constructor(private router: Router, private tService:TeamService) { }

  ngOnInit(): void {
    // this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]')
    this.tService.getAllTeam().subscribe(
      ( response)=>{this.teamsTab = response.teams}
  );
  }
  
  goToInfo(id:number){
    alert(id);
    this.router.navigate([`teamInfo/${id}`]);
  }
  goToEdit(id:number){
    // alert(id);
    this.router.navigate([`editTeam/${id}`]);
  }
  deleteMatch(id:number){

    // for (let i = 0; i < this.teamsTab.length; i++) {
    //   if (id == this.teamsTab[i].id ) {
    //     this.teamsTab.splice(i,1);
    //     break
        
    //   }
      
    // }
    // localStorage.setItem('teams',JSON.stringify(this.teamsTab));
    this.tService.deleteTeamById(id).subscribe(
      (response)=>{
        console.log("here response after delete",response);
        this.tService.getAllTeam().subscribe(
          (data)=>{
            this.teamsTab=data.teams;
          }
        )
        
      });
  
  }

}
