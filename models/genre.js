let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
  {
    name: {type: String, required:true, maxLength: 100, minLength: 4}
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);