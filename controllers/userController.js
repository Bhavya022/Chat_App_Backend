const User = require('../models/User');
const userService = require('../services/userService');

const getUserStatus = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);
    return res.status(200).json({ status: user.online });
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching user status' });
  }
};

const updateUserStatus = async (req, res) => {
  const { userId, onlineStatus } = req.body;
  try {
    if(!userId || !onlineStatus) {
      return res.status(400).json({ message: 'User ID and online status are required' });
    }
    await userService.updateUserStatus(userId, onlineStatus);
    return res.status(200).json({ message: 'User status updated' });
  } catch (err) {
   return res.status(500).json({ message: 'Error updating user status controller' });
  }
};
const activeuser = async (req, res) => {
    try {
        const users = await User.find({ status: 'online' }); // Filtering users who are online

        if (users.length === 0) {
            return res.status(200).json({ message: 'No active users at the moment' });
        }

        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching active users' });
    }
});

module.exports = { getUserStatus, updateUserStatus,activeuser };
