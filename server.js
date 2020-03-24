const express = require("express");
const dotenv = require("dotenv");

// Load enviroment variables
dotenv.config({ path: "./config/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

//Define routes
app.use("/products", require("./routes/products"));

// Set public as static folder
app.use(express.static("public"));
// @route GET /
// @desc  Information about API
// @access Public
// @params NO params

app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to API"
  });
});

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
