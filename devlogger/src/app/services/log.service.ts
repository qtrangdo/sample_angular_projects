import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Log } from '../models/Log';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();
  
  constructor () {
    // this.logs = [
    //   {
    //     id: '1',
    //     text: 'First log',
    //     date: new Date('12/26/1017 12:54:23')
    //   },
    //   {
    //     id: '2',
    //     text: 'Second dee',
    //     date: new Date('7/26/1017 12:05:45')
    //   },
    //   {
    //     id: '3',
    //     text: 'Third log',
    //     date: new Date('1/31/2017 5:25:20')
    //   }
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }
  updateLog(log: Log) {
    this.logs.forEach((curr, i) => {
      if (log.id === curr.id) {
        this.logs.splice(i, 1);
      }
    })
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((curr, i) => {
      if (log.id === curr.id) {
        this.logs.splice(i, 1);
      }
    })
  }

  clearState() {
    this.stateSource.next(true);
  }
}
