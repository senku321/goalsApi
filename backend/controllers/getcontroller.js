const expressAsyncHandler = require("express-async-handler");

const asyncHandler = require(express-async-handler)

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field"async );
  }
  res.status(200).json({ message: "set goals" });
});
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});
module.exports = {
  getGoals,
  updateGoals,
  deleteGoals,
  setGoals,
};
