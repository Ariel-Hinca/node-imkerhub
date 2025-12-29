import express from "express";
import { connectDB } from "./config/database.js";
import beekeepersRouter from "./routes/beekeepers.js";
import productsRouter from "./routes/products.js";
import path from "path"; 
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

connectDB();

app.use(express.json());
app.use("/beekeepers", beekeepersRouter);
app.use("/products", productsRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});
