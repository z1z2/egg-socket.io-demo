'use strict';
module.exports = () => {
  return async (ctx, next) => {
    ctx.socket.emit('event', 'connected! ' + ctx.socket.id);
    ctx.socket.join('room');
    await next();
  };
};
