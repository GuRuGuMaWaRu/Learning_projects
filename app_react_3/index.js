const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_react_3",
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // without this my axios.post wasn't working!!!

require("./routes")(app);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
