const mongoose = require('mongoose');

// Define Schemes
const NomalUserSchema = new mongoose.Schema({
    email: {type: String, unique: true },
    password: String,
    confirm: String,
    nickname: String,
    agreement: Boolean
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('NomalUser', NomalUserSchema);