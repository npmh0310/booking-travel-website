
var Review = require('../models/Review')
var Tour = require('../models/Tour')

const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new Review({ ...req.body })

    try {
        const savedReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({
            success: true,
            message: "Successfully review submitted",
            data: savedReview
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to submit. Try again"
        })
    }
}

module.exports = { createReview }