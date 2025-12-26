import express from "express";
import { connectDB } from "./config/database.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("ImkerHub API werkt!");
});

app.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});
