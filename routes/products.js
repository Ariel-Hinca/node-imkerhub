import express from "express";
import { Product } from "../models/Product.js";

const router = express.Router();

// GET alle producten
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// GET één product mbv id
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// POST nieuw product
router.post("/", async (req, res) => {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
});

// PUT product updaten mbv id
router.put("/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
});


// DELETE product verwijderen
router.delete("/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
});

export default router;
