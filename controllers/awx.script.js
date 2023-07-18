const AWS = require('aws-sdk');
const fs = require('fs')

AWS.config.update({
  accessKeyId: "AKIA53OZ26JAY6M5V3M3",
  secretAccessKey: "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",
  region: 'us-east-1' // Reemplaza con tu región deseada
});

const rekognition = new AWS.Rekognition();
const imagePath = '/Users/pepealacid/Desktop/IRONHACK/WEB_DEV/M3/project/MET_app/MET_app_API/controllers/monalisa.jpeg';

// Cargar la imagen como bytes
const imageBytes = fs.readFileSync(imagePath);

// Parámetros para la función detectLabels
const params = {
  Image: {
    Bytes: imageBytes
  },
  MaxLabels: 10,
  MinConfidence: 50
};

// Llamada a la función detectLabels de Rekognition
rekognition.detectLabels(params, (err, data) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Etiquetas:', data.Labels);
  }
});