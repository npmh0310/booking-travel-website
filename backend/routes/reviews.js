var express = require('express');
const { createReview } = require('../controllers/reviewController');
const { verifyUser } = require('../utils/verifyToken');

const reviewRoute = express.Router();

reviewRoute.post('/:tourId', verifyUser, createReview)

module.exports = reviewRoute;