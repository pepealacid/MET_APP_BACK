const { Schema, model } = require("mongoose")

const itinerarySchema = new Schema(
    {
        name: String, 
        departments: [String], 
        departmentsId: [Number],
        rating: [Number], 
        artworkId: [Number], 
        artworkData: [Object],
        desiredTime: [String], 
        galleriesId: [String], 
        path: [], 
        calculatedTime: Number
    }
)

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = Itinerary;