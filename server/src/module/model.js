//model.js

const mongoose = require("mongoose")

const sendingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
    ,
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

    // "message" = quick message, "quote" = quote request
    type: {
        type: String,
        enum: ["message", "quote"],
        default: "message",
    },
    phone: { type: String, default: "" },
    service: { type: String, default: "" },
    location: { type: String, default: "" },
    budget: { type: String, default: "" },
    timeline: { type: String, default: "" },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }


},
    {
        timestamps: true,
        autoCreate: true,
        autoIndex: true
    }
)





const SendingModel = mongoose.model("Sending", sendingSchema)
module.exports = SendingModel;

