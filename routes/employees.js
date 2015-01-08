'use strict';

var employees = require('../controllers/employees');

module.exports = function(Employees, app, auth) {
  console.log('routes/employees');
  app.get('/employees', employees.all);
};
