const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"], // شرط ألا يقل السعر عن صفر
  },
  publishedYear: {
    type: Number,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);