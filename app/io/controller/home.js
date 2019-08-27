'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async server(ctx) {
    const message = ctx.args[0];
    const nsp = this.app.io.of('/');
    console.log(ctx.app.clients);
    Object.keys(ctx.app.clients).forEach(client => {
      nsp.emit(client, `Hi ${client}! someone sent message: ${message}`);
    });
  }
}
module.exports = DefaultController;
