import express from "express";
import { Beekeeper } from "../models/Beekeeper.js";

const router = express.Router();

// Nieuwe imker toevoegen aan DB
router.post("/", async (req, res) => {
    const beekeeper = new Beekeeper(req.body);
    const savedBeekeeper = await beekeeper.save();
    res.json(savedBeekeeper);
});

// Alle imkers ophalen uit de DB
router.get("/", async (req, res) => {
    const beekeepers = await Beekeeper.find();
    res.json(beekeepers);
});

export default router;