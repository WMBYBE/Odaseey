module.exports = {
  db: {
    server: 'DESKTOP-OHUN9V2',
    authentication: {
      type: 'default',
      options: {
        userName: 'sa', // or whatever user you're using in SSMS
        password: 'yourPassword123', // put your actual password here
      }
    },
    options: {
      database: 'OdaysseyDB',
      encrypt: false,                 // set to false for local SQL Server
      trustServerCertificate: true
    }
  }
};



