const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = "3000";
const authRoute = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.header("Allow-Access-Control-Methods", "GET,POST,PUT,PATCH,DELETE");
//   next();
// });
app.use("/auth", authRoute);

mongoose
  .connect(
    "mongodb+srv://mauriceoppenberger:fjlo180218@cluster0-izp9a.mongodb.net/Issue-Tracker"
  )
  .then(result => {
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch(err => console.log(err));
