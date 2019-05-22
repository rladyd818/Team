const mongoose = require('mongoose');

// Define Schemes
const KakaoSchema = new mongoose.Schema({
    id: {type: String, unique: true },
    nickname: String,
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('Kakao', KakaoSchema);