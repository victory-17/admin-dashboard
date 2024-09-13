const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  main_image: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  // proprties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  stock: { type: Number, required: true },
  expired: { type: Boolean, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
