const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/roamly";

main()
  .then(async () => {
    console.log("connected to DB");
    await initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("Old data deleted");

    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (err) {
    console.log(err);
  }
};