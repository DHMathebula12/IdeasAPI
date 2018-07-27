import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  @Input() idea: { header: string; body: string };
  constructor() {}

  ngOnInit() {}
}
