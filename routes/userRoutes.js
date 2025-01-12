const express = require('express');
const { getUserStatus, updateUserStatus,activeuser } = require('../controllers/userController');
const router = express.Router();

router.get('/:userId/status', getUserStatus);
router.put('/status', updateUserStatus); 
router.get('/active',activeuser);

module.exports = router;
