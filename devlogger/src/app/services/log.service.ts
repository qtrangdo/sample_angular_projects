import { Injectable } from '@angular/core';
import { Observation, Observable } from 'rxjs';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor () {
    this.logs = [
      {
        id: '1',
        text: 'First log',
        date: new Date('12/26/1017 12:54:23')
      },
      {
        id: '2',
        text: 'Second dee',
        date: new Date('7/26/1017 12:05:45')
      },
      {
        id: '3',
        text: 'Third log',
        date: new Date('1/31/2017 5:25:20')
      }
    ]
  }

  getLogs() {
    return this.logs
  }
}
