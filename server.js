const express = require('express');
        const cors = require('cors');
        const connection = require('./db');
        const authRoutes = require('./routes/auth');
        const userRoutes = require('./routes/users');
        const taskRoutes = require('./routes/tasks');
        const characterRoutes = require('./routes/characters');
        const assignmentRoutes = require('./routes/assignments');
        const app = express();
        const port = 3000;

        app.use(cors());
        app.use(express.json());

        // Routes
        app.use('/api', authRoutes);
        app.use('/api/users', userRoutes);
        app.use('/api/tasks', taskRoutes);
        app.use('/api/characters', characterRoutes);
        app.use('/api/assignments', assignmentRoutes);

        app.listen(port, () => {
          console.log(`Server listening on port ${port}`);
        });