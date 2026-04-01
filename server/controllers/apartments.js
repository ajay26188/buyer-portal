const apartmentsRouter = require('express').Router();
const Apartment = require('../models/apartment');
const mongoose = require('mongoose');

// Get all apartments
apartmentsRouter.get('/', async (req, res) => {
  try {
    const apartments = await Apartment.find({});
    res.json(apartments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = apartmentsRouter;