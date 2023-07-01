const router = require("express").Router()
const Itinerary = require("../models/Itinerary.model")

router.post("/", async (req, res, next) => {
    try {
        const { name, artpieces, estimatedTime, speed } = req.body

        if (!name) {
            res.status(400).json({ message: "The itinerary must have a name" })
            return
        }

        if (!(speed == "FAST" || speed == "MEDIUM" || speed == "SLOW")) {
            res.status(400).json({
                message: "The itinerary must have one of the following speeds 'FAST' 'MEDIUM' 'SLOW'"
            })
            return
        }
        if (!estimatedTime) {
            res.status(400).json({
                message: "We cannot create an itinerary with no time"
            })
            return
        }

        const itinerary = await Itinerary.create({ name, artpieces, estimatedTime, speed })
        res.status(201).json(itinerary)

    } catch (error) {
        next(error)
        console.log(error)
    }
})


router.get("/:id", async(req, res, next)=>{
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        res.status(200).json(itinerary) 
    } catch (error) {
        console.log(error)
        next(error)
    }
})  

router.put("/:id", async (req, res, next) => {
    try {
        const { name, artpieces, estimatedTime, speed } = req.body
        const { id } = req.params

        if (!name) {
            res.status(400).json({ message: "The itinerary must have a name" })
            return
        }

        if (!(speed == "FAST" || speed == "MEDIUM" || speed == "SLOW")) {
            res.status(400).json({
                message: "The itinerary must have one of the following speeds 'FAST' 'MEDIUM' 'SLOW'"
            })
            return
        }
        if (!estimatedTime) {
            res.status(400).json({
                message: "We cannot edit an itinerary with no time"
            })
            return
        }
        const itinerary = await Itinerary.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(itinerary)

    } catch (error) {
        console.log(error)
        next(error)
    }
}) 

router.delete("/:id", async(req, res, next)=>{
    const {id} = req.params
    try {
        await Itinerary.findByIdAndDelete(id)
        res.status(200).json({ message: `The itinerary ${id} successfully deleted 🗑` })
    } catch (error) {
        console.log(error)
        next(error)
    }
})


module.exports = router