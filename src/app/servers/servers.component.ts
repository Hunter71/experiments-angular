import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverCreationStatus: string;
  serverName: string;
  servers: string[];

  constructor() {
    this.allowNewServer = false;
    this.serverName = 'Test Server';
    this.servers = ['Test Server', 'Server EU-CENTRAL-1'];

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created: ${this.serverName}`;
  }
}
