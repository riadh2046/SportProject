import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css'],
})
export class SearchPlayersComponent implements OnInit {
  playersResult: any = [];
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      age: ['', [Validators.required]],
    });
  }

  search() {
    console.log("here object",this.searchForm.value);
    
    let playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    this.playersResult = playersTab.filter( (element: any) => element.age >= this.searchForm.value.age);
    console.log("here player result",this.playersResult);
    
  }
}
