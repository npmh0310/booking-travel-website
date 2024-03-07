var mongoose = require('mongoose')


const bookingSchema = new mongoose.Schema(
    {
        tourName: {
            // type: mongoose.Types.ObjectId,
            // ref: "Tour",
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true,
        },
        userId: {
            // type: mongoose.Types.ObjectId,
            // ref: "User",
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        guestSize: {
            type: Number,
            require: true
        },
        bookAt: {
            type: Date,
            require: true
        }
    },
    { timestamps: true }
);

var Review = mongoose.model("Review", bookingSchema);
module.exports = Booking
