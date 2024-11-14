const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Define the schema for the Book entity
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the model for the Book schema
const Book = model('Book', bookSchema);

module.exports = Book;
