import mongoose from "mongoose";

let juicesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Juice = mongoose.model("Juice", juicesSchema);
