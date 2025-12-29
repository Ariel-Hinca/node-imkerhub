import express from "express";
import { Beekeeper } from "../models/Beekeeper.js";

const router = express.Router();

// Nieuwe imker toevoegen aan DB
router.post("/", async (req, res) => {
    const beekeeper = new Beekeeper(req.body);
    const savedBeekeeper = await beekeeper.save();
    res.json(savedBeekeeper);
});

// Alle imkers ophalen uit de DB, met limit en offset
router.get("/", async (req, res) => {
   const limit = parseInt(req.query.limit) || 0; 
   const offset = parseInt(req.query.offset) || 0; 

    const beekeepers = await Beekeeper.find().limit(limit).skip(offset);
    res.json(beekeepers);
});

// Eén imker ophalen op ID
router.get("/:id", async (req, res) => {
    const beekeeper = await Beekeeper.findById(req.params.id);
    res.json(beekeeper);
});

// Imker verwijderen op ID
router.delete("/:id", async (req, res) => {
    const deletedBeekeeper = await Beekeeper.findByIdAndDelete(req.params.id);
    res.json({ message: "Imker succesvol verwijderd" });
});

// Imker updaten op ID
router.put("/:id", async (req, res) => {
    const updatedBeekeeper = await Beekeeper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBeekeeper);
});

export default router;