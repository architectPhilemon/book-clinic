const express = require('express');
const { createService, getServices } = require('../controllers/serviceController');
const router = express.Router();

router.post('/', createService); // You may want to add authentication here
router.get('/', getServices);

module.exports = router;
