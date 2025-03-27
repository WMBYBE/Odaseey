module.exports = {
            db: {
                server: 'YOUR_SERVER_ADDRESS', // e.g., 'localhost' or 'your-server.database.windows.net'
                authentication: {
                    type: 'default',
                    options: {
                        userName: 'YOUR_DATABASE_USERNAME',
                        password: 'YOUR_DATABASE_PASSWORD',
                    },
                },
                options: {
                    database: 'OdaysseyDB',
                    encrypt: true, // Use true if you're connecting to Azure SQL Database
                    trustServerCertificate: true, // Set to true if you're using a self-signed certificate
                },
            },
            jwtSecret: 'YOUR_JWT_SECRET', // Replace with a strong secret key (e.g., a long random string)
        };