'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;

  router.get('/', controller.home.index);

  // socket.io
  io.of('/').route('server', io.controller.home.server);
  io.of('/').route('user', io.controller.home.user);
};
