import express from "express";
import { Beekeeper } from "../models/Beekeeper.js";

const router = express.Router();

// Nieuwe imker toevoegen
router.post("/", async (req, res) => {
  try {
    const beekeeper = new Beekeeper(req.body);
    const savedBeekeeper = await beekeeper.save();
    res.status(201).json(savedBeekeeper);
  } catch (error) {
    res.status(400).json({ error: "Kon imker niet opslaan" });
  }
});

export default router;
