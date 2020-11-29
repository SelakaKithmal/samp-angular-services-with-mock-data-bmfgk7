import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Servers } from '../sample/servers-class.component';
import { SERVERS } from '../mock-servers';
import {data} '../sample-data';

@Injectable()

export class ServersService {

  constructor() {

  }

  getServers(): Observable<Servers[]> {
    return of(SERVERS);
  }
    
  getSampleData(): Observable<any> {
    return of(data);
  }
}

