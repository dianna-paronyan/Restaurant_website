import mongoose from "mongoose";

let lemonadsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Lemonad = mongoose.model("Lemonad", lemonadsSchema);
