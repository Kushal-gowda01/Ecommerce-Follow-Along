const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address!",
        ],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    phoneNumber: {
        type: String, 
    },
    addresses: [
        {
            country: {
                type: String,
            },
            city: {
                type: String,
            },
            address1: {
                type: String,
            },
            address2: {
                type: String,
            },
            zipCode: {
                type: String,
            },
            addressType: {
                type: String,
                enum: ["Home", "Work", "Other"],
            },
        },
    ],
    role: {
        type: String,
        enum: ["user", "admin"], 
        default: "user",
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

const User = model("User", userSchema);
module.exports = User;
