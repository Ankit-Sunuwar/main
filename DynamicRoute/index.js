require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = Number(process.env.PORT) || 8000;
const indexRouter = require("./routes");

app.use(morgan("tiny"));
app.use(express.json()); // undefine na aawos bhanye ra postman ko json sanga link garye ko ho, yes le garda hami le body ma lekh ye ko display hoss bhanye ra ho.
app.use("/resources", express.static("public"));

// application level middileware ho.
app.use((req, res, next) => {
  req.body.currency = "NPR";
  next();
});

app.use("/", indexRouter);

// middleware for error handling.
app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong.";
  res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`Application is running on PORT ${PORT}`);
});
