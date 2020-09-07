const express = require('express');
const emojis = require('./emojis');
const status = require('./status');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/status', status);

module.exports = router;
