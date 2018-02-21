import {Component} from '@angular/core';

@Component({
  selector : 'app-server', // El selector es la etiqueta HTML
  templateUrl : './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus () {
    return this.serverStatus;
  }
}
