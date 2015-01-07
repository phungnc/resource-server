'use strict';

/**
 * Module dependencies
 */

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    _        = require('lodash');

/**
 * User schema
 */

var EmployeeSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  birthday: {
    type: Date
  },
  competencies:[],
  skills:[],
  projects:[]
});

mongoose.model('Employee', employeeSchema);
