'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async user(ctx) {
    const userId = ctx.args[0];
    ctx.app.clients[ctx.socket.id] = userId;
    console.log(ctx.app.clients);
  }
  async server(ctx) {
    const message = ctx.args[0];
    const nsp = this.app.io.of('/');
    Object.keys(ctx.app.clients).forEach(client => {
      nsp.to(client).emit('event', `Hi someone sent message: ${message}`);
    });
  }
}
module.exports = DefaultController;
