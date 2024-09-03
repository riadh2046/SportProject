import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTab:any=[
    {Title:'fezeez',Description:'ddddd',Date:25/624},
    {Title:'ddzzz',Description:'ddddd',Date:25/624}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
