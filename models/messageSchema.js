import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 Characters!"],
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email"],
    },
    number: {
        type: String,
        required: [true, "Number Required!"],
        minLength: [10, "Phone Number must contain at least 10 Numbers!"],
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [5, "Message must contain at least 5 Characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);