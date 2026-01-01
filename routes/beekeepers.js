import express from "express";
import { Beekeeper } from "../models/Beekeeper.js";

const router = express.Router();

// Nieuwe imker toevoegen aan DB
router.post("/", async (req, res) => {

    const { name, email, location } = req.body; 
    // Basic validatie 
    if (!name || !email || !location) { 
        return res.json({ error: "Alle velden zijn verplicht." }); 
    } 
    // Check op cijfers in de naam
    for (let i = 0; i < name.length; i++) { 
        if (!isNaN(name[i])) { 
            return res.json({ error: "Naam mag geen cijfers bevatten." }); 
        } 
    }
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

// Zoeken op naam
router.get("/search", async (req, res) => {
    const name = req.query.name;
    const beekeepers = await Beekeeper.find({ name: new RegExp(name, "i") });
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
    const {name} = req.body;

    // Controle voor als er cijfers in name zouden gevuld worden tijdens een update
    if (name) {
        for(let i=0; i<name.length; i++){
            if (!isNaN(name[i]) && name[i] !== " ") { 
                return res.json({ error: "Naam mag geen cijfers bevatten." }); 
            }
        }
    } 

    const updatedBeekeeper = await Beekeeper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBeekeeper);
});

export default router;