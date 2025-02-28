const { model, Schema, models } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Please enter a valid email address",
      },
    },
    price: {
      type: Number,
      required: [true, "Please enter your price"],
      min: [1, "Price should be greater than 0"],
    },
    description: {
      type: String,
      required: [true, "Please enter your description"],
      minLength: [8, "Description should be greater than 8 characters"],
    },
    category: {
      type: String,
      required: [true, "Please enter your category"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter your stock"],
      min: [1, "Stock should be greater than 0"],
    },
    tags: {
      type: [String],
      required: [true, "Please enter your tags"],
    },
    images: {
      type: [String],
      required: [true, "Please add your images"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Prevent model recompilation issue
module.exports = models.User || model("User", userSchema);
