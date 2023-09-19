// external import
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const {
  notFoundErrorHandler,
  defaultErrorHandler,
} = require("./middlewares/common/errorHandler");
dotenv.config();

// internal import
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const menuRouter = require("./routers/menuRouter");

// app initialization
const app = express();
app.use(cors());
app.use(express.json());

//database connection
mongoose
  .connect(uri)
  .then(() => console.log("Database connection success!"))
  .catch((err) => console.log(err));

// static folder
app.use(express.static(path.join(__dirname, "public")));

// routing
app.use("/menu", menuRouter);

// notfound error handler
app.use(notFoundErrorHandler);

// default error handler
app.use(defaultErrorHandler);

// listing port
app.listen(port, () => {
  console.log(`I am listing port ${port}`);
});
