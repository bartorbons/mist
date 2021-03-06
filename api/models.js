/* jshint node: true */
"use strict";

/**
 * User Model
 */
var userModel = {
  table: 'user',
  fields: {
    id: String,

    username: String,
    password: String,
    email: String,

    created: Date,
    deleted: Date,
    blocked: Date,

    authToken: String
  }
};



/**
 * Create models
 */
function createModels(obj) {
  obj.User = obj.db.createModel(userModel.table, userModel.fields);
}


/**
 * Exports
 */
exports.createModels = createModels;
