'use strict';
const CLIENTS = Symbol('Application#clients');

module.exports = {
  get clients() {
    if (!this[CLIENTS]) {
      this[CLIENTS] = {};
    }
    return this[CLIENTS];
  },

};
