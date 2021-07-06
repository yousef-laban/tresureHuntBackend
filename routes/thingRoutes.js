const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const passport = require("passport");

const {
  thingCreat,
  treasureList,
  garbageList,
} = require("../controllers/thingsControllers");

router.get(
  "/treasure",
  passport.authenticate("jwt", { session: false }),
  treasureList
);
router.get("/garbage", garbageList);

router.post("/", upload.single("image"), thingCreat);

module.exports = router;
