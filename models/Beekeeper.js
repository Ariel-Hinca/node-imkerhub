import mongoose from "mongoose";

const BeekeeperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true }
});

export const Beekeeper = mongoose.model("Beekeeper", BeekeeperSchema);
