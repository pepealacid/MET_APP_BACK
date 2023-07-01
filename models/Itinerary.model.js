const { Schema, model } = require("mongoose")

const itinerarySchema = new Schema(
    {
        name: {
            type: String, 
            required: [true, "You should give a name to this tour"],
            trim: true
        },
        artpieces: [{type: Schema.Types.ObjectId, ref: "Artwork"}],
        estimatedTime: {
            type: String, 
        }, 
        speed: {
            type: String, 
            uppercase: true, 
            enum: ["FAST", "MEDIUM", "SLOW"]
        }
    }
)

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = Itinerary;