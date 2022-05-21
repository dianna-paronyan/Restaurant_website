import mongoose from "mongoose";

let baveragesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Baverage = mongoose.model("Baverage", baveragesSchema);
