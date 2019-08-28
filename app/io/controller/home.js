'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async whoAmI(ctx) {
    ctx.app.clients[ctx.socket.id] = ctx.args[0];
    console.log(ctx.app.clients);
  }
  async server(ctx) {
    const message = ctx.args[0];
    const nsp = this.app.io.of('/');
    Object.keys(ctx.app.clients).forEach(client => {
      nsp.to(client).emit('event', `Hi user-${ctx.app.clients[client]}, someone sent message: ${message}`);
    });
  }
}
module.exports = DefaultController;
