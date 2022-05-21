import mongoose from "mongoose";

let drinksSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Coffee = mongoose.model("Coffee", drinksSchema);
