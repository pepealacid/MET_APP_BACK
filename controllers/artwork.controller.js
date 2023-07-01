const Artwork = require("../models/Artwork.model");


module.exports.create = async (req, res, next) => {
    try {
      if(!req.body.title && !req.body.artistDisplayName) return res.status(400).json({ message: "Bad request" });
      const artwork = await Artwork.create(req.body);
      return res.status(201).json(artwork);
    } catch (error) {
      next(error);
    }
  }

module.exports.detail = async (req, res, next) => {
    try {
      const { id } = req.params;
      const artwork = await Artwork.findById(id);
      return res.status(200).json(artwork);
    } catch (error) {
      next(error);
    }
  }

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    return res.status(200).json({ message: `Artwork ${id} successfully deleted 🗑`});
  } catch (error) {
    next(error);
  }
}

