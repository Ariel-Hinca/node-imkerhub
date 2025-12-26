import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/imkerhub");
    console.log("MongoDB verbonden");
  } catch (error) {
    console.error("Fout bij verbinden met MongoDB:", error);
  }
}
