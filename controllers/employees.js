'use strict';

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    _        = require('lodash');

/**
 * Find user by id
 */
exports.employee = function(req, res, next, id) {
  Employee.findOne({
    _id: id
  })
  .exec(function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load Employee ' + id));
    req.profile = employee;
    next();
  });
};
