const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/getcontroller");

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(getGoals).put(setGoals);

router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);
module.exports = router;
