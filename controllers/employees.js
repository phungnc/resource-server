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

exports.all = function(req, res) {
  console.log('Controller/employees...');

  Employee.find().sort('-created').exec(function(err, employees){
    if(err) {
      return res.status(500).json({
        error: "Cannot list the employees"
      });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.json(employees);

  });
};
