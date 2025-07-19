const express = require("express");
const path = require("path");
const router = express.Router();

// Mengarahkan "/" ke file home.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html")); // pastikan lokasi sesuai
});

module.exports = router;
