const express = require("express");

const router = new express.Router();

// importing the all schema
const MensRanking=require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// we will handle get request
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.status(201).send(getMens);
  } catch (e) {
    res.send(e);
  }
});
// we will handle get request for individual
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    //const getMen=await MensRanking.findById(_id);
    const getMen = await MensRanking.findById(_id).sort({ ranking: 1 }); // use for sorting
    res.status(400).send(getMen);
  } catch (e) {
    res.send(e);
  }
});
// we will handle patch request for individual
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(500).send(getMen);
  } catch (e) {
    res.send(e);
  }
});
// we will handle delete request for individual
router.delete("/mens/:id", async (req, res) => {
  try {
    // const _id=req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(500).send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

// now exporting the router

module.exports= router;

