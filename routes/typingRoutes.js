const express = require('express');
const authenticateUser = require('../middleware/authMiddleware');
const { updateTyping,getTyping } = require('../controllers/typingController');
const router = express.Router();

router.post('/status', updateTyping);
router.get('/:userId/status', getTyping);

module.exports = router;
