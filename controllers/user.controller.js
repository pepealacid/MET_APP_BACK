const User = require("../models/User.model");

//Get user
module.exports.get = async (req, res, next) => {
  try {
    const { _id } = req.payload;
    const user = await User.findById(_id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

//Get and update favorite artworks from user
module.exports.getFavoriteArtworks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user.artworksSaved);
  } catch (error) {
    next(error);
  }
};

module.exports.changeFirstTime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    user.firstTime = false;
    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getFirstTime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user.firstTime);
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateFavoriteArtworks = async (req, res, next) => {
  try {
    const { id, artworkID } = req.params;
    const user = await User.findById(id);

    // Check if artworkId is already in artworksSaved array
    const index = user.artworksSaved.indexOf(artworkID);
    if (index > -1) {
      // If artworkId exists, remove it from the array
      user.artworksSaved.splice(index, 1);
    } else {
      // If artworkId doesn't exist, add it to the array
      user.artworksSaved.push(artworkID);
    }

    // Save the updated user object
    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//Get and update favorite artists from user
module.exports.getFavoriteArtists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user.artistsSaved);
  } catch (error) {
    next(error);
  }
};

module.exports.updateFavoriteArtists = async (req, res, next) => {
  try {
    const { id, artistID } = req.params;
    const user = await User.findById(id);

    // Check if artistID is already in artistsSaved array
    const index = user.artistsSaved.indexOf(artistID);
    if (index > -1) {
      // If artistID exists, remove it from the array
      user.artistsSaved.splice(index, 1);
    } else {
      // If artistID doesn't exist, add it to the array
      user.artistsSaved.push(artistID);
    }

    // Save the updated user object
    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: `User ${id} successfully deleted 🗑` });
  } catch (error) {
    next(error);
  }
};

module.exports.updateItinerary = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { itineraryId } = req.body;

    const user = await User.findById(userId);
    user.intinerariesSaved.push(itineraryId);

    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const user = await User.findByIdAndUpdate(id, body);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports.removeItinerary = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { itineraryId } = req.body;

    const user = await User.findById(userId);
    console.log(user.intinerariesSaved);
    const filtered = user.intinerariesSaved.filter(
      (itinerary) => itinerary != itineraryId
    );
    user.intinerariesSaved = filtered;
    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.getItinerary = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("intinerariesSaved");
    return res.status(200).json(user.intinerariesSaved);
  } catch (error) {
    next(error);
  }
};
