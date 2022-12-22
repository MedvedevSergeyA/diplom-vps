const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: { type: String, required: true },
    // На каком из товаров находится комментрий
    deviceId: { type: Schema.Types.ObjectId, ref: "Device", required: true },
    // Кто оставил комментарий
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Comment", schema);
