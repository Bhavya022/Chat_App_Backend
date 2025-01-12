const express = require('express');
const  authenticateUser  = require('../middleware/authMiddleware');
const { saveMessageHandler,getMessagesHandler } = require('../controllers/messageController');
const router = express.Router();

router.post('/message', saveMessageHandler);
router.get('/:userId/:recipientId', getMessagesHandler);

module.exports = router;
