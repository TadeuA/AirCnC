const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
})

//exportar model
module.exports = mongoose.model('User', UserSchema);