const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.end("/");
});
router.get("/best", (req, res) => {
  res.end("/best");
});

router.get("/", () => {});
router.post("/", () => {});
router.put("/", () => {});
router.delete("/", () => {});

module.exports = router;
