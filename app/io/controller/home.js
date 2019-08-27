'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async server(ctx) {
    const message = ctx.args[0];
    const nsp = this.app.io.of('/');
    nsp.to('room').emit('event', `Hi someone sent message: ${message}`);
  }
}
module.exports = DefaultController;
