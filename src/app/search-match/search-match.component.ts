import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css'],
})
export class SearchMatchComponent implements OnInit {
  //object
  //Form ID
  searchMatchForm!: FormGroup
  resultTAb:any=[];
  constructor(private router: Router, private sService: MatchService,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.searchMatchForm = this.formBuilder.group ({
      scoreOne: ['', [Validators.required]],
      scoreTow: ['', [Validators.required]]
      
    });
   
  }
  search(){
    this.resultTAb = [];
    let matchesTab = JSON.parse(localStorage.getItem ('matches')|| '[]');
    this.resultTAb = matchesTab.filter((elt:any)=>{
      elt.scoreOne == elt.obj.scoreOne &&
      elt.scoreTow == elt.obj.scoreTow
    } );
  }
 
  
    // console.log('ADD Match BTN clicked', this.search);
    // let matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
    // for (let i = 0; i < matchesTab.length; i++) {
    //   if (
    //     this.search.scoreOne == matchesTab[i].scoreOne &&
    //     this.search.scoreTow == matchesTab[i].scoreTow
    //   ) {
    //     this.searchTable.push(matchesTab[i]);
    //   }
    // }
    
}