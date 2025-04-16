// db.js – Using Tedious to connect to Microsoft SQL Server
const { Connection, Request } = require('tedious');
const dbConfig = require('./config').db;  // Load DB credentials from config.js

// Initialize connection using the config settings
const connection = new Connection(dbConfig);

// Attach an event handler to know when connection succeeds or fails
connection.on('connect', (err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to OdaysseyDB database.');
  }
});

// Start the connection attempt
connection.connect();

// Export the connection object for use in other modules
module.exports = connection;
