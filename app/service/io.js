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

  sendAll(type, data) {
    const nsp = this.app.io.of('/');
    Object.keys(this.app.clients).forEach(key => {
      nsp.to(key).emit(type, data);
    });
  }

  sendToProject(project, type, data) {
    const nsp = this.app.io.of('/');
    Object.entries(this.app.clients).forEach(([ key, value ]) => {
      if (value.project === project) nsp.to(key).emit(type, data);
    });
  }

  sendToUser(user, type, data) {
    const nsp = this.app.io.of('/');
    Object.entries(this.app.clients).forEach(([ key, value ]) => {
      if (value.user === user)nsp.to(key).emit(type, data);
    });
  }
}

module.exports = IOService;
