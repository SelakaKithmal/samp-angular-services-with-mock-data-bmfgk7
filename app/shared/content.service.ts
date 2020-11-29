import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// Import Model
import { Content } from '../sample/content-class.component';
// Import Data
import { CONTENT } from '../mock-content';

@Injectable()

export class ContentService {

  constructor() {

  }

  getContent(): Observable<Content[]> {
    return of(CONTENT);
  }


}