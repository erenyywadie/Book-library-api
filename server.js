const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const app = require("./app");

const DB = "mongodb+srv://aer32nu_db_user:INvf1KUBDhBhOfTT@cluster0.gmxvnbp.mongodb.net/book-library?retryWrites=true&w=majority";

mongoose.connect(DB)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});