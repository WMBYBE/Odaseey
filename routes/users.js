const express = require('express');
const connection = require('../db');
const authenticateToken = require('./middleware/auth');
const { Request } = require('tedious');

const router = express.Router();

// Get user by ID
router.get('/:userId', authenticateToken, (req, res) => {
  const userId = req.params.userId;

  const request = new Request(
    `SELECT user_id, username, email, xp, level FROM Users WHERE user_id = @userId`,
    (err, rowCount, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error fetching user' });
      }

      if (rowCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      const user = rows[0];
      res.json(user);
    }
  );

  request.addParameter('userId', 'Int', parseInt(userId));
  connection.execSql(request);
});

module.exports = router;