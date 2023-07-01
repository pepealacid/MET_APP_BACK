const mongoose = require("mongoose");
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/artworks";
const Artwork = require("../models/Artwork.model");
// const artworksData = require("../artworksData.json")
const art = {
    "objectID": 400,
    "isHighlight": false,
    "accessionNumber": "33.120.113",
    "accessionYear": "1933",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/DP106806.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ad/web-large/DP106806.jpg",
    "additionalImages": [
        "https://images.metmuseum.org/CRDImages/ad/original/DP106807.jpg"
    ],
    "constituents": [
        {
            "constituentID": 166055,
            "role": "Maker",
            "name": "Isaac Hutton",
            "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500524522",
            "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q37640816",
            "gender": ""
        }
    ],
    "department": "The American Wing",
    "objectName": "Beaker",
    "title": "Beaker",
    "culture": "American",
    "period": "",
    "dynasty": "",
    "reign": "",
    "portfolio": "",
    "artistRole": "Maker",
    "artistPrefix": "",
    "artistDisplayName": "Isaac Hutton",
    "artistDisplayBio": "American, New York 1766–1855 Albany, New York",
    "artistSuffix": "",
    "artistAlphaSort": "Hutton, Isaac",
    "artistNationality": "American",
    "artistBeginDate": "1766",
    "artistEndDate": "1855",
    "artistGender": "",
    "artistWikidata_URL": "https://www.wikidata.org/wiki/Q37640816",
    "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500524522",
    "objectDate": "1800–1830",
    "objectBeginDate": 1800,
    "objectEndDate": 1830,
    "medium": "Silver",
    "dimensions": "Overall: H. 3 1/2 in. (8.9 cm); 3 oz. 2 dwt. (97 g)\r\nBase: Diam. 1 15/16 in. (5 cm)\r\nLip: 3 1/8 x 2 15/16 in. (7.9 x 7.5 cm)",
    "measurements": [
        {
            "elementName": "Overall",
            "elementDescription": null,
            "elementMeasurements": {
                "Height": 8.9,
                "Weight": 0.097
            }
        },
        {
            "elementName": "Other",
            "elementDescription": "Lip",
            "elementMeasurements": {
                "Depth": 7.5184,
                "Width": 7.9375
            }
        },
        {
            "elementName": "Diam. of base",
            "elementDescription": null,
            "elementMeasurements": {
                "Diameter": 4.9784
            }
        }
    ],
    "creditLine": "Bequest of Alphonso T. Clearwater, 1933",
    "geographyType": "Made in",
    "city": "Albany",
    "state": "New York",
    "county": "",
    "country": "United States",
    "region": "Mid-Atlantic",
    "subregion": "",
    "locale": "",
    "locus": "",
    "excavation": "",
    "river": "",
    "classification": "",
    "rightsAndReproduction": "",
    "linkResource": "",
    "metadataDate": "2023-02-07T04:46:51.34Z",
    "repository": "Metropolitan Museum of Art, New York, NY",
    "objectURL": "https://www.metmuseum.org/art/collection/search/400",
    "tags": null,
    "objectWikidata_URL": "https://www.wikidata.org/wiki/Q116373415",
    "isTimelineWork": false,
    "GalleryNumber": "774"
}


const insertArtworkFromJSON = async () => {
    try {
        // await Artwork.insertMany(artworksData)
        await Artwork.create(art)
    } catch (error) {
        console.log("The was a problem inserting the artworks", error);
    }
    
};
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        insertArtworkFromJSON();
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });
