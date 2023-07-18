const { ImageAnnotatorClient } = require('@google-cloud/vision');

module.exports.analyzeImage = async (req, res, next) => {
  try {
    const { filePath } = req.body;

    const client = new ImageAnnotatorClient();
    const [result] = await client.labelDetection("https://intn24.lalr.co/cms/2023/05/04133847/La-Mona-Lisa-de-Leonardo-da-Vinci.jpg");
    const labels = result.labelAnnotations.map((label) => label.description);

    res.json({ labels });
  } catch (error) {
    next(error);
  }
};
