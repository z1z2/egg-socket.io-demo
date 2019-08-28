'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async whoAmI(ctx) {
    ctx.service.io.addClient(ctx.socket.id, ctx.args[0]);
  }
  async server(ctx) {
    ctx.service.io.sendAll('message', ctx.args[0]);
    ctx.service.io.sendToUser('5d3e6894cc46b70c1a430655', 'message', ctx.args[0]);
    ctx.service.io.sendToProject('5d3e6894cc46b70c1a430654', 'message', ctx.args[0]);
  }
}
module.exports = DefaultController;
