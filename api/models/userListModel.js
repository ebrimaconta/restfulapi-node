'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
  username : {
    type: String,
    required: 'Please enter a username'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'deactive', 'not-complete']
    }],
    default: ['deactive']
  }
});

module.exports = mongoose.model('User', User);