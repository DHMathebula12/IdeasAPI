import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  title = 'Ideas';
  ideaStatus = 'button was not created';
  ideaCreated = false;
  ideas = [
    {
      header: 'Idea 1',
      body: 'Idea Body'
    },
    {
      header: 'Idea 2',
      body: 'Idea Body 2'
    }
  ];

  constructor() {}

  ngOnInit() {}

  createIdea() {
    // this.ideas.push(this.title);
    this.ideaCreated = true;
    this.ideaStatus = 'Idea was created';
  }

  getHeader(value) {
    alert(value);
  }
}
