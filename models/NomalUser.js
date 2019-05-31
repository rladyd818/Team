const mongoose = require('mongoose');

// Define Schemes
const NomalUserSchema = new mongoose.Schema({
    id: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    confirm: String,
    nickname: String,
    agreement: Boolean,
    gender: String,
    tel: {type: Number, unique: true},
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('NomalUser', NomalUserSchema);