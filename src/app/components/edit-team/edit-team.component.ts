import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
teamForm!: FormGroup;
team:any = {};
teamId:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.teamId = this.activatedRoute.snapshot.params['id'];
    let teamsTab = JSON.parse(localStorage.getItem('teams') ||'[]');
      for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == this.teamId) {
          this.team = teamsTab[i];
          break;
        } 
      }
  }
  editTeam(){
    let teamsTab = JSON.parse(localStorage.getItem('teams') ||'[]');
    for (let i = 0; i < teamsTab.length; i++) {
      if (teamsTab[i].id == this.teamId) {
        teamsTab[i] = this.team;
        break;
      } 
    }
  localStorage.setItem('teams',JSON.stringify(teamsTab));
  this.router.navigate(['admin']);
}
  }


