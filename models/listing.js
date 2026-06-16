const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type : String,
    default: "https://unsplash.com/photos/YN9gPS5SBrk",
    set: (v) => v === " "? "https://unsplash.com/photos/YN9gPS5SBrk" : v
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;