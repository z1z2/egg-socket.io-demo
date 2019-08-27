'use strict';
module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('event', 'connected! ' + ctx.socket.id);
    ctx.socket.join('room');
    await next();
    delete app.clients[ctx.socket.id];
    console.log('disconnection!');
  };
};
