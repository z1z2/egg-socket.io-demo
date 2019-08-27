'use strict';
module.exports = app => {
  return async (ctx, next) => {
    app.clients[ctx.socket.id] = {};
    ctx.socket.emit('event', 'connected! ' + ctx.socket.id);
    await next();
  };
};
