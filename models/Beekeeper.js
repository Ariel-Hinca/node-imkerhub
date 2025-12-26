import mongoose from "mongoose";

const BeekeeperSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String
});

export const Beekeeper = mongoose.model("Beekeeper", BeekeeperSchema);
