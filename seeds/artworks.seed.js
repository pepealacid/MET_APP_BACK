const axios = require("axios");
const mongoose = require("mongoose");
const http = require("http");
const https = require("https");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/artworks";
const Artwork = require("../models/Artwork.model");
let deleteManyExecuted = false;

require("dotenv").config();

// Create a new instance of http.Agent with keepAlive option set to true
const httpAgent = new http.Agent({ keepAlive: true });

// Create a new instance of https.Agent with keepAlive option set to true
const httpsAgent = new https.Agent({ keepAlive: true });

// Configure Axios to use the custom agents
axios.defaults.httpAgent = httpAgent;
axios.defaults.httpsAgent = httpsAgent;

const createArtwork = async (artworkData) => {
  try {
    //COMMENT IF YOU DON'T WANT TO DELETE THE WHOLE COLLECTION BEFORE RUNNING THE FUNCTION
    // if (!deleteManyExecuted) {
    //   await Artwork.deleteMany();
    //   deleteManyExecuted = true;
    // }
    const artwork = new Artwork(artworkData);
    await artwork.save();
    console.log("Artwork created:", artwork.title);
  } catch (error) {
    console.log("Error creating artwork:", error);
  }
};

//MAIN FUNCTION
// const getArtworks = async () => {
//   try {
//     const response = await axios.get(
//       "https://collectionapi.metmuseum.org/public/collection/v1/objects",
//     );
//     const idsArray = response.data.objectIDs;
//     const batchSize = 200;
//     const totalBatches = Math.ceil(idsArray.length / batchSize);

//     for (let batch = 0; batch < totalBatches; batch++) {
//       const startIdx = batch * batchSize;
//       const endIdx = startIdx + batchSize;
//       const batchIds = idsArray.slice(startIdx, endIdx);

//       const requests = batchIds.map((id) =>
//         axios.get(
//           `http://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
//         )
//       );

//       const responses = await Promise.all(requests);

//       for (let i = 0; i < responses.length; i++) {
//         const response = responses[i];
//         const artworkData = response.data;
//         await createArtwork(artworkData);
//       }
//     }
//   } catch (error) {
//     console.log("Error getting artworks:", error);
//   } finally {
//     mongoose.disconnect();
//     console.log("Disconnected from the database"); // Disconnect from the MongoDB database
//   }
// };

//IF YOUR COPY HAS BEEN STOPPED, UNCOMMENT THIS FUNCTION AND CHANGE THE lastID VALUE
//REMEMBER TO COMMENT THE MAIN FUNCTION
const getArtworks = async () => {
    try {
      const response = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects"
      );
      const idsArray = response.data.objectIDs;
      //variable value
      const lastID = 238145
      const startIndex = idsArray.indexOf(lastID) + 1;
      const batchIds = idsArray.slice(startIndex);
      const batchSize = 200;
      const totalBatches = Math.ceil(batchIds.length / batchSize);
  
      for (let batch = 0; batch < totalBatches; batch++) {
        const startIdx = batch * batchSize;
        const endIdx = startIdx + batchSize;
        const currentBatchIds = batchIds.slice(startIdx, endIdx);
  
        const requests = currentBatchIds.map((id) =>
          axios.get(
            `http://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
        );
  
        const responses = await Promise.all(requests);
  
        for (let i = 0; i < responses.length; i++) {
          const response = responses[i];
          const artworkData = response.data;
          await createArtwork(artworkData);
        }
      }
    } catch (error) {
      console.log("Error getting artworks:", error);
    } finally {
      mongoose.disconnect();
      console.log("Disconnected from the database"); // Disconnect from the MongoDB database
    }
  };
  

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    getArtworks();
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
