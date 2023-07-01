const { Schema, model } = require("mongoose");

const artworkShortSchema = new Schema(
  {
    objectID: Number,
    isHighlight: Boolean,
    primaryImage: String,
    constituents: [Object],
    department: String,
    objectName: String,
    title: String,
    culture: String,
    period: String,
    artistDisplayName: String,
    artistDisplayBio: String,
    artistNationality: String,
    artistGender: String,
    artistWikidata_URL: String,
    objectURL: String,
    tags: [Object],
    objectWikidata_URL: String,
    GalleryNumber: String,
  },
  {
    timestamps: true,
  }
);

const ArtworkShort = model("ArtworkShort", artworkShortSchema);

module.exports = ArtworkShort;
