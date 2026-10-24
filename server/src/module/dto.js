// dto.js

const Joi = require("joi");

const optional = (max) => Joi.string().trim().max(max).allow("").default("");

// One schema for both the quick message and the quote request.
// A quote must also say which service is needed and where the project is.
const sending = Joi.object({
  type: Joi.string().valid("message", "quote").default("message"),
  name: Joi.string().trim().min(3).max(100).required(),
  email: Joi.string().trim().email().required(),
  phone: optional(30),
  service: Joi.when("type", {
    is: "quote",
    then: Joi.string().trim().max(100).required(),
    otherwise: optional(100),
  }),
  location: Joi.when("type", {
    is: "quote",
    then: Joi.string().trim().max(150).required(),
    otherwise: optional(150),
  }),
  budget: optional(100),
  timeline: optional(100),
  message: Joi.string().trim().min(10).max(3000).required(),
});

module.exports = { sending };
