import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

//Attribut
  matchesTab:any=[

    {id:1,scoreOne:4,scoreTow:2,teamOne:'CA',teamTow:'EST'},
    {id:2,scoreOne:2,scoreTow:3,teamOne:'ESS',teamTow:'CSS'},
    {id:3,scoreOne:5,scoreTow:4,teamOne:'RMD',teamTow:'FCB'},
    {id:4,scoreOne:2,scoreTow:2,teamOne:'JUV',teamTow:'ROM'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
