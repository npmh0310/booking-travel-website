var express = require('express');
const { createTour, getAllTour, getTourById, updateTour, deleteTourById, getTourBySearch, getFeaturedTour, getTourCount } = require('../controllers/tourController');
const { verifyAdmin } = require('../utils/verifyToken');

const tourRoute = express.Router();

tourRoute.post("/", verifyAdmin, createTour);
tourRoute.get("/", getAllTour);
tourRoute.get("/search/getTourBySearch", getTourBySearch);
tourRoute.get("/search/getFeaturedTour", getFeaturedTour);
tourRoute.get("/search/getTourCount", getTourCount);
tourRoute.get("/:id", getTourById);
tourRoute.put("/:id", verifyAdmin, updateTour);
tourRoute.delete("/:id", verifyAdmin, deleteTourById);

module.exports = tourRoute;