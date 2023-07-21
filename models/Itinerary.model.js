const { Schema, model } = require("mongoose")

const itinerarySchema = new Schema(
    {
        name: {
            type: String,
            default: "Personalized Tour" 
        }, 
        departments: [String], 
        departmentsId: [Number],
        rating: [Number], 
        artworkId: [Number], 
        artworkData: [Object],
        desiredTime: [String], 
        galleriesId: [String], 
        path: [], 
        picture: {
            type: String, 
            default: "https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-superJumbo.jpg?quality=75&auto=webp"
        },
        calculatedTime: Number, 
        tag: {
            type: String, 
            default: null
        }
    }
)

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = Itinerary;