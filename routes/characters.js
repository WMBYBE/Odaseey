// routes/characters.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Character route is alive!');
});

module.exports = router;
