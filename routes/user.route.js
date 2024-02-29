const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.end(req.method + req.baseUrl);
});

router.post("/", (req, res) => {
  res.end(req.method + req.baseUrl);
});

router.put("/", (req, res) => {
  res.end(req.method + req.baseUrl);
});

module.exports = router;
