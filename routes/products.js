import express from "express";
import { Product } from "../models/Product.js";

const router = express.Router();

// GET alle producten
router.get("/", async (req, res) => {
    const limit = parseInt(req.query.limit) || 0; 
    const offset = parseInt(req.query.offset) || 0;

    const products = await Product.find().limit(limit).skip(offset);
    res.json(products);
});

// Zoeken op productnaam
router.get("/search", async (req, res) => {
    const name = req.query.name;
    const products = await Product.find({ name: new RegExp(name, "i") });
    res.json(products);
});

// GET één product mbv id
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// POST nieuw product
router.post("/", async (req, res) => {
    const { name, price, description } = req.body; 

    // Check lege velden 
    if (!name || !price || !description) { 
        return res.json({ error: "Alle velden zijn verplicht." }); 
    } 
    // Check of price een cijfer is 
    if (isNaN(price)) { 
        return res.json({ error: "Prijs moet een nummer zijn." }); 
    }
    
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
});

// PUT product updaten mbv id
router.put("/:id", async (req, res) => {
    const { name, price } = req.body; 
    // Check of price een cijfer is 
    if (price && isNaN(price)) { 
        return res.json({ error: "Prijs moet een nummer zijn." }); 
    }

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
