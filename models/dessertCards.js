import mongoose from "mongoose";

let dessertSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  dataTarget: {
    type: String,
    required: true,
  },
  modalId: {
    type: String,
    required: true,
  },
});

export let Dessert = mongoose.model("Dessert", dessertSchema);
