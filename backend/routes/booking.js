var express = require('express');
const { createBooking, getBooking, getAllBooking } = require('../controllers/bookingController');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const bookingRoute = express.Router();

bookingRoute.post('/', verifyUser, createBooking);
bookingRoute.get('/:id', verifyUser, getBooking);
bookingRoute.get('/', verifyAdmin, getAllBooking);



module.exports = bookingRoute;