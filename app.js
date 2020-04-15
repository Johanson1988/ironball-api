const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const createError = require('http-errors');

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error(err));

  // MIDDLEWARE SETUP
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN,'http://127.0.0.1:5500'],
  }),
);

// ROUTES MIDDLEWARE:
  app.use('/', require('./routes/index'));

// ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;