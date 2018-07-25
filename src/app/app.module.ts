import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolModalModule } from '@solar/components';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot(), SolModalModule, NgbModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
