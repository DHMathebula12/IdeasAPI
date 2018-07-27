import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  title = 'Ideas';
  ideaStatus = 'button was not created';
  ideaCreated = false;
  ideas = [];
  constructor(private ideasService: IdeasService) {}

  ngOnInit() {
    this.ideasService.getIdeas().subscribe(response => {
      this.ideas = response;
    });
    // const myNumbers = Observable.interval(1000)
    //   .filter(value => {
    //     return value > 2;
    //   })
    //   .map(value => {
    //     return value * 2;
    //   });
    // myNumbers.subscribe(number => {
    //   console.log(number);
    // });
  }



  getHeader(value) {
    alert(value);
  }
}
