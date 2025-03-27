const { Connection, Request } = require('tedious');
        const config = require('./config'); // Create a config.js file for your database credentials

        const connection = new Connection(config.db);

        connection.on('connect', (err) => {
          if (err) {
            console.error('Error connecting to database:', err);
          } else {
            console.log('Connected to database');
          }
        });

        connection.connect();

        module.exports = connection;