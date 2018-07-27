import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IdeasService {
  url = 'http://localhost:9001';
  constructor(private http: Http) {
  }

  getIdeas() {
    return this.http.get(this.url + '/ideas').map(response => {
      return response.json();
    });
  }
}
