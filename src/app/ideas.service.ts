import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IdeasService {
  url = 'http://localhost:9001';
  constructor(private http: Http) {}

  getIdeas() {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // }



// const requestOptions = {
//   headers: new Headers(headerDict),
// };

// return this.http.get(this.heroesUrl, requestOptions)

    return this.http.get(this.url + '/ideas').map(response => {
      return response.json();
    });
  }

  createIdea(note: { header: string; body: string }) {
    return this.http.post(this.url + '/ideas', note);
  }
}
