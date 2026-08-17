const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DATABASE;
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
