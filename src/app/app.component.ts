import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private modalService: NgbModal) {}

  alert(content: any, modalSize?: string) {
    const options: any = modalSize ? { size: modalSize } : {};

    this.modalService.open(content, options).result.then(
      result => {
        console.log(result);
      },
      reason => {
        console.log(reason);
      }
    );
  }
}
