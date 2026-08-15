const express = require("express");
const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

const bookRouter = require("./routes/book-routes");
app.use("/api/v1/books", bookRouter);

const authRouter = require("./routes/auth-routes");
app.use("/api/v1/users", authRouter);

module.exports = app;