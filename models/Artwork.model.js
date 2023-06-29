const { Schema, model } = require("mongoose");

const artworkSchema = new Schema(
  {
    objectID: Number,
    isHighlight: Boolean,
    accessionNumber: String,
    accessionYear: String,
    isPublicDomain: Boolean,
    primaryImage: String,
    primaryImageSmall: String,
    additionalImages: [String],
    constituents: [Object],
    department: String,
    objectName: String,
    title: String,
    culture: String,
    period: String,
    dynasty: String,
    reign: String,
    portfolio: String,
    artistRole: String,
    artistPrefix: String,
    artistDisplayName: String,
    artistDisplayBio: String,
    artistSuffix: String,
    artistAlphaSort: String,
    artistNationality: String,
    artistBeginDate: String,
    artistEndDate: String,
    artistGender: String,
    artistWikidata_URL: String,
    artistULAN_URL: String,
    objectDate: String,
    objectBeginDate: Number,
    objectEndDate: Number,
    medium: String,
    dimensions: String,
    measurements: [Object],
    creditLine: String,
    geographyType: String,
    city: String,
    state: String,
    county: String,
    country: String,
    region: String,
    subregion: String,
    locale: String,
    locus: String,
    excavation: String,
    river: String,
    classification: String,
    rightsAndReproduction: String,
    linkResource: String,
    metadataDate: String,
    repository: String,
    objectURL: String,
    tags: [Object],
    objectWikidata_URL: String,
    isTimelineWork: Boolean,
    GalleryNumber: String},
  {
    timestamps: true
  }
);

const Artwork = model("Artwork", artworkSchema);

module.exports = Artwork;



