module.exports = {
  db: {
    server: 'HAWKTUAH/SQLEXPRESS',
    authentication: {
      type: 'default',
    },
    options: {
      database: 'OdaysseyDB',
      encrypt: false,                 // set to false for local SQL Server
      trustServerCertificate: true
    }
  }
};



s