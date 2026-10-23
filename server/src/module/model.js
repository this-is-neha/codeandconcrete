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

