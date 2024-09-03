import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css'],
})
export class MatchTableComponent implements OnInit {
  matchesTab: any = [];

  constructor(private router: Router, private mService: MatchService) {}

  ngOnInit(): void {
    // this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]')
    this.mService.getAllMatches().subscribe(
      (response)=>{this.matchesTab = response.T;}
  );
  }

  // Display(id:number,msg:string) {

  //   alert('Match N° ' + id+" "+msg)
  // };
  // Edit(id:number,msg:string) {

  //   alert("match N°2 is Edited")
  // }

  scoreColor(s1: number, s2: number) {
    let color: string;
    if (s1 > s2) {
      color = 'green';
    } else if (s1 < s2) {
      color = 'red';
    } else {
      color = 'blue';
    }
    return color;
  }

  scoreResult(s1: number, s2: number) {
    let color: string;
    if (s1 > s2) {
      color = 'Win';
    } else if (s1 < s2) {
      color = 'Loss';
    } else {
      color = 'Draw';
    }
    return color;
  }

  deleteMatch(id: number) {
    // for (let i = 0; i < this.matchesTab.length; i++) {
    //   if (id == this.matchesTab[i].id ) {
    //     this.matchesTab.splice(i,1);
    //     break

    //   }
    
    // }
    // localStorage.setItem('matches',JSON.stringify(this.matchesTab));

    this.mService.deleteMatchById(id).subscribe(
      (response)=>{
        console.log("here response after delete",response);
        this.mService.getAllMatches().subscribe(
          (data)=>{
            this.matchesTab=data.T;
          }
        )
        
      });
  }

  goToInfo(id: number) {
    // alert(id);
    this.router.navigate([`matchInfo/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`]);
  }
}
