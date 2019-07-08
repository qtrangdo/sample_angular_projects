import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit() {
   this.logService.getLogs().subscribe(logs => {
     this.logs = logs;
   })
  }

  onSelect(log: Log): void {
    this.logService.setFormLog(log); 
  }

  onDelete(log: Log): void {
    this.logService.deleteLog(log);
  }
}
