import mongoose from "mongoose";

let teasSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Tea = mongoose.model("Tea", teasSchema);
