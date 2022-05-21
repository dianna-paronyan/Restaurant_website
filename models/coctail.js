import mongoose from "mongoose";

let coctailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export let Coctail = mongoose.model("Coctail", coctailsSchema);
