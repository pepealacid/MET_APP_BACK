const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      lowercase: true,
      trim: true
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
