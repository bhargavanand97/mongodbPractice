const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a Schema

const MarioSchema = new Schema({
    name: String,
    weight: Number
});

// Creating a character(Model)

const MarioChar = mongoose.model('mariochar',MarioSchema); 
// This basically says when someone creates a new mario charecter (MarioChar),
// It should be inside of collection called 'mariochar' and it should
// follow the schema called 'MarioSchema'

module.exports = MarioChar;
