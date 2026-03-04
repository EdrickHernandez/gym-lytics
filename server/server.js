const express = require('express');
const cors = require('cors');
const sequelize = require('./models (sequelize)/index');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permite comunicación frontend-backend
app.use(express.json()); // Parsea JSON en solicitudes
app.use(express.urlencoded({ extended: true }));

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 'GymTracker API funcionando', status: 'OK' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Rutas de la API
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/exercises', require('./routes/exerciseRoutes'));
// app.use('/api/workouts', require('./routes/workoutRoutes'));
// app.use('/api/history', require('./routes/historyRoutes'));

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a PostgreSQL');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor gymlytics corriendo en http://localhost:${PORT}`);
      console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error conectando a la base de datos:', err);
  });

module.exports = app;
