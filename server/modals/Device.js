const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    img: String,
    isFavourite: Boolean,
    price: Number,
    rate: Number,
    reviews: Number,
    category: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Device", schema);
