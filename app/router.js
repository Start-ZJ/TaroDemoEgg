'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/index')(app)
  require('./router/home')(app)
  require('./router/file')(app)
};
