const User = require("../models/User.model");

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: `User ${id} successfully deleted 🗑`});
  } catch (error) {
    next(error);
  }
}

