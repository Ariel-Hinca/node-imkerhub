import express from "express";
import { connectDB } from "./config/database.js";
import beekeepersRouter from "./routes/beekeepers.js";
import productsRouter from "./routes/products.js";

const app = express();

connectDB();

app.use(express.json());
app.use("/beekeepers", beekeepersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("ImkerHub API werkt!");
});

app.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});
