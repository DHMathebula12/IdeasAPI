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
  ideas = ['idea1', 'idea 2', 'idea 3'];

  constructor() {}

  ngOnInit() {}

  createIdea() {
    this.ideas.push(this.title);
    this.ideaCreated = true;
    this.ideaStatus = 'Idea was created';
  }

  getHeader(value) {
    alert(value);
  }
}
