import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;

  constructor() {
    this.serverId = Math.round(Math.random() * 100);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  isServerOnline(): boolean {
    return this.serverStatus === 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    return this.isServerOnline() ? 'green' : 'red';
  }
}
