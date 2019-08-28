'use strict';
const Service = require('egg').Service;
class IOService extends Service {
  addClient(k, v) {
    this.app.clients[k] = v;
    console.log(this.app.clients);

  }
  removeClient(id) {
    delete this.app.clients[id];
  }
  send(type, data) {
    const nsp = this.app.io.of('/');
    Object.keys(this.app.clients).forEach(client => {
      nsp.to(client).emit(type, `Hi user-${this.app.clients[client].user}, someone sent message: ${data}`);
    });

  }
}

module.exports = IOService;
