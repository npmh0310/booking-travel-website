
var Booking = require('../models/Booking')

const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({
            success: true,
            message: "Successfully booked",
            data: savedBooking
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to booking. Try again"
        })
    }
}

const getBooking = async (req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: book
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed. Try again"
        })
    }
}

const getAllBooking = async (req, res) => {

    try {
        const books = await Booking.find({})

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: books
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed. Try again"
        })
    }
}

module.exports = {
    createBooking, getBooking, getAllBooking
}