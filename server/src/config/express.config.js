const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const Joi = require("joi");

require("./db.config");
const mainRouter = require("./routing.config");

const app = express();

app.use(helmet());

const corsOptions = {
  origin: [ 'http://localhost:5173'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
};






app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({
    message: "Comapny backend is live 🚀",
  });
});



app.use(mainRouter);


app.use((req, res, next) => {
  next({
    code: 404,
    message: "Resource not found",
  });
});


app.use((error, req, res, next) => {
  console.log("Mongoose error:", error instanceof mongoose.MongooseError);

  let statusCode = error.code || 500;
  let data = error.data || null;
  let msg = error.message || "Internal server error";

  if (error instanceof Joi.ValidationError) {
    statusCode = 422;
    msg = "Validation Failed";
    data = {};
    const errorDetail = error.details;
    if (Array.isArray(errorDetail)) {
      errorDetail.forEach((errorObj) => {
        data[errorObj.context.label] = errorObj.message;
      });
    }
  }

  if (+statusCode === 11000) {
    statusCode = 400;
    data = {};
    const fields = Object.keys(error.keyPattern);
    fields.forEach((fieldname) => {
      data[fieldname] = `${fieldname} should be unique`;
    });
    msg = "Validation Failed";
  }

  res.status(statusCode).json({
    result: data,
    message: msg,
    meta: null,
  });
});

module.exports = app;
