'use strict';
module.exports = app => {
  return async (ctx, next) => {
    await next();
    delete app.clients[ctx.socket.id];
    console.log('disconnection!');
  };
};
