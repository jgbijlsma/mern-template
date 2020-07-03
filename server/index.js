const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("colors");

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

console.log("Starting server...".grey);
app.listen(PORT, () =>
  console.log(`The server has started on port: ${PORT}`.green)
);

// set up mongoose

console.log("Connecting to MongoDB...".grey);
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established".green);
  }
);

// set up routes

app.use("/users", require("./routes/userRouter"));
