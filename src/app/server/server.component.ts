import {Component} from '@angular/core';

@Component({
  selector : 'app-server', // El selector es la etiqueta HTML
  templateUrl : './server.component.html',
  styles: [`
    .online {
      color : white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus () {
    return this.serverStatus;
  }
}
