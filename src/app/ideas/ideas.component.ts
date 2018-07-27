import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

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

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .filter(value => {
        return value > 2;
      })
      .map(value => {
        return value * 2;
      });

    myNumbers.subscribe(number => {
      console.log(number);
    });
  }

  createIdea() {
    // this.ideas.push(this.title);
    this.ideaCreated = true;
    this.ideaStatus = 'Idea was created';
  }

  getHeader(value) {
    alert(value);
  }
}
