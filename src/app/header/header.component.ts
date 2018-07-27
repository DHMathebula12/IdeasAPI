import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() fromParent: string;
  @Output() headerEventSent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  onButtonClicked() {
    this.headerEventSent.emit('Friday!!!!');
  }
  ngOnInit() {}
}
