const express = require('express');
        const bcrypt = require('bcrypt');
        const jwt = require('jsonwebtoken');
        const connection = require('../db');
        const config = require('../config');
        const { Request } = require('tedious');

        const router = express.Router();

        // Register
        router.post('/register', async (req, res) => {
          try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const request = new Request(
              `INSERT INTO Users (username, email, password) VALUES (@username, @email, @password)`,
              (err, rowCount) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ error: 'Error registering user' });
                }
                res.status(201).json({ message: 'User registered successfully' });
              }
            );

            request.addParameter('username', 'NVarChar', username);
            request.addParameter('email', 'NVarChar', email);
            request.addParameter('password', 'NVarChar', hashedPassword);

            connection.execSql(request);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error registering user' });
          }
        });

        // Login
        router.post('/login', (req, res) => {
          const { email, password } = req.body;

          const request = new Request(
            `SELECT * FROM Users WHERE email = @email`,
            (err, rowCount, rows) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error logging in' });
              }

              if (rowCount === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
              }

              const user = rows[0];
              bcrypt.compare(password, user.password, (err, result) => {
                if (err || !result) {
                  return res.status(401).json({ error: 'Invalid credentials' });
                }

                const token = jwt.sign({ userId: user.user_id }, config.jwtSecret, {
                  expiresIn: '1h',
                });
                res.json({ token });
              });
            }
          );

          request.addParameter('email', 'NVarChar', email);
          connection.execSql(request);
        });

        module.exports = router;

        // authentication middleware
        const jwt = require('jsonwebtoken');
                const config = require('../config');

                const authenticateToken = (req, res, next) => {
                  const authHeader = req.headers['authorization'];
                  const token = authHeader && authHeader.split(' ')[1];

                  if (token == null) return res.sendStatus(401);

                  jwt.verify(token, config.jwtSecret, (err, user) => {
                    if (err) return res.sendStatus(403);
                    req.user = user;
                    next();
                  });
                };

                module.exports = authenticateToken;