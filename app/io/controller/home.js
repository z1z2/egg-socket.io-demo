'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async whoAmI(ctx) {
    ctx.service.io.addClient(ctx.socket.id, ctx.args[0]);
  }
  async server(ctx) {
    ctx.service.io.send('message', ctx.args[0]);
  }
}
module.exports = DefaultController;
