const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our user model
const userSchema = new Schema({
    email: {
        type: String,  // Reference to the javascript String
        unique: true,  // Check unique before saving
        lowercase: true   // Always make lowercase before saving
    },
    password: String
});

// Create model class
const ModelClass = mongoose.model('user', userSchema);

// Export model so other files can use it
module.exports = ModelClass;

