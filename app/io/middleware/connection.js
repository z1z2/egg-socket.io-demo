'use strict';
module.exports = () => {
  return async (ctx, next) => {
    await next();
    ctx.service.io.removeClient(ctx.socket.id);
    console.log('disconnection!');
  };
};
