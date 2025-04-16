const express = require('express');
const connection = require('../db');
const authenticateToken = require('./middleware/auth');
const { Request, TYPES } = require('tedious');

const router = express.Router();

// Get tasks for a user
router.get('/', authenticateToken, (req, res) => {
  const userId = req.user.userId; // Get the user ID from the JWT

  const request = new Request(
    `SELECT * FROM Task_assignments WHERE user_id = @userId`,
    (err, rowCount, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error fetching tasks' });
      }

      const formatted = rows.map(row =>
        row.reduce((acc, column) => {
          acc[column.metadata.colName] = column.value;
          return acc;
        }, {})
      );

      res.json(formatted);
    }
  );

  request.addParameter('userId', TYPES.Int, userId);
  connection.execSql(request);
});

module.exports = router;
