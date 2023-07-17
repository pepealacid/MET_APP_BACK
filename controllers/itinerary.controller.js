const Itinerary = require("../models/Itinerary.model");


module.exports.create = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.create(req.body)
        res.status(201).json(itinerary)

    } catch (error) {
        next(error)
        console.log(error)
    }
}

module.exports.detail = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        res.status(200).json(itinerary)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const { id } = req.params
        const itinerary = await Itinerary.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(itinerary)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params
    try {
        await Itinerary.findByIdAndDelete(id)
        res.status(200).json({ message: `The itinerary ${id} successfully deleted 🗑` })
    } catch (error) {
        console.log(error)
        next(error)
    }
}