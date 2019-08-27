'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async server(ctx) {
    const message = ctx.args[0];
    await ctx.socket.emit('event', `Hi! I've got your message: ${message}`);
  }
}
module.exports = DefaultController;
