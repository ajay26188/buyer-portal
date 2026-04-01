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

//add a new apartment
apartmentsRouter.post('/', async (req, res) => {
  const { title, description, price, location } = req.body;

  try {
    const apartment = new Apartment({
      title,
      description,
      price,
      location
    });

    const savedApartment = await apartment.save();
    res.status(201).json(savedApartment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = apartmentsRouter;