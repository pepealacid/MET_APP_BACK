const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required."],
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },

    artistsSaved: {
      type: [String],
    },

    artworksSaved: {
      type: [String],
    },

    intinerariesSaved: {
      type: [{ type: Schema.Types.ObjectId, ref: "Itinerary" }],
    },

    firstTime: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
