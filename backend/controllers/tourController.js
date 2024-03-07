
var Tour = require('../models/Tour')


const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        })
    }
}

const getAllTour = async (req, res) => {

    const page = parseInt(req.query.page)

    try {
        const getAllTour = await Tour.find({})
            .populate('reviews')
            .skip(page * 8)
            .limit(8);

        res.status(200).json({
            success: true,
            count: getAllTour.length,
            message: "Successfully get all",
            data: getAllTour
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get all. Try again"
        })
    }
}

const getTourById = async (req, res) => {
    const id = req.params.id;

    try {
        const getTourById = await Tour.findById(id).populate('reviews')

        res.status(200).json({
            success: true,
            message: "Successfully get tour",
            data: getTourById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get tour. Try again"
        })
    }
}

const getFeaturedTour = async (req, res) => {
    const id = req.params.id;

    try {
        const getTourById = await Tour.find({ featured: true }).populate('reviews').limit(8)

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: getTourById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed. Try again"
        })
    }
}

const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize } // $gte là tìm các giá trị lớn hơn or bằng giá trị cho trước 
        }).populate('reviews')

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: tours
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed, Try again"
        })
    }
}

const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateTour
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update. Try again"
        })
    }
}

const deleteTourById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteTourById = await Tour.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            data: deleteTourById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete. Try again"
        })
    }
}

const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success: true,
            data: tourCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch. Try again"
        })
    }
}

module.exports = {
    createTour,
    deleteTourById,
    getAllTour,
    getTourById,
    updateTour,
    getFeaturedTour,
    getTourBySearch,
    getTourCount
}