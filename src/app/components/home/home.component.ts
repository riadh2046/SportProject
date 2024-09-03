import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m:any ={scoreOne:2,scoreTow:4,teamOne:'CA',teamTow:'EST'}

  constructor() { }

  ngOnInit(): void {
  }

}
