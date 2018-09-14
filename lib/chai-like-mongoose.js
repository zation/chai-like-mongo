var mongoose = require('mongoose');

module.exports = {
  match: function(object) {
    return mongoose.Types.ObjectId.isValid(object);
  },
  assert: function(object, expected) {
    return object.equals(expected);
  }
};
