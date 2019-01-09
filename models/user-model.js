const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googlrID: String
});

let User = mongoose.model('user', userSchema);

module.exports = User;