const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Listing = require('./models/listing');

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/roamly');
}

main().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My new Villa",
    description: "By the beach",
    price: 1500,
    location: "Mumbai",
    country: "India"
  });
  await sampleListing.save();
  res.json(sampleListing);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});