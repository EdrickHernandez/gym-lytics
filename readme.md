Sistema de Gestión de Entrenamientos
📋 Descripción
GymLytics es una aplicación web para gestión de entrenamientos de gimnasio que permite a los usuarios registrar sus ejercicios, contar repeticiones, registrar pesos y visualizar su progreso histórico. Incluye una biblioteca multimedia de ejercicios con imágenes y videos demostrativos para asegurar la correcta ejecución de cada movimiento.

🎯 Objetivo del MVP
Crear una plataforma funcional donde usuarios puedan:

Registrarse y gestionar su perfil personal

Acceder a un catálogo de ejercicios con instrucciones visuales

Registrar sesiones de entrenamiento con series, repeticiones y peso

Visualizar historial detallado y estadísticas de progreso

✨ Características Principales del MVP
Autenticación y Perfiles
✅ Registro de usuarios con email y contraseña

✅ Login seguro con JWT

✅ Perfil editable (nombre, edad, peso, altura, objetivos)

✅ Roles: Admin, Entrenador, Miembro

Gestión de Ejercicios (CRUD)
✅ Crear ejercicios con nombre, descripción y grupo muscular

✅ Subir imagen o video demostrativo (máx 50MB)

✅ Editar y eliminar ejercicios

✅ Visualizar catálogo completo con búsqueda y filtros

Registro de Entrenamientos
✅ Iniciar sesión de entrenamiento

✅ Seleccionar ejercicios de la biblioteca

✅ Registrar múltiples series por ejercicio

✅ Capturar: número de repeticiones, peso utilizado, tiempo de descanso

✅ Guardar entrenamiento completo

Historial y Estadísticas
✅ Ver todos los entrenamientos realizados

✅ Filtrar por fecha o ejercicio específico

✅ Estadísticas: volumen total, peso máximo, frecuencia

✅ Gráficos de evolución de peso por ejercicio

🛠️ Stack Tecnológico
Frontend
text
- React 18.2+ con Vite
- React Router v6 (navegación entre páginas)
- Axios (peticiones HTTP al backend)
- Material-UI v5 (componentes UI)
- React Hook Form + Yup (formularios y validación)
- Recharts (gráficos de progreso)
- React Player (reproducción de videos)
- pnpm (gestor de paquetes - 3.7x más rápido que npm)
Backend
text
- Node.js 18+
- Express.js 4.18+ (servidor y API REST)
- PostgreSQL 15+ (base de datos relacional)
- Sequelize 6+ (ORM para PostgreSQL)
- JWT (autenticación basada en tokens)
- Bcrypt.js (hash seguro de contraseñas)
- Multer (manejo de subida de archivos multimedia)
- Express Validator (validación de datos de entrada)
- pnpm (gestor de paquetes)
Infraestructura y Herramientas
text
- Git & GitHub (control de versiones)
- PostgreSQL local o Railway/Supabase (BD en la nube)
- Cloudinary o AWS S3 (almacenamiento multimedia)
- Postman o Thunder Client (testing de APIs)
- VS Code (editor recomendado)
📁 Estructura del Proyecto
text
gym-tracker/
├── client/                          # Frontend React + Vite
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── Profile.jsx
│   │   │   ├── Exercises/
│   │   │   │   ├── ExerciseList.jsx
│   │   │   │   ├── ExerciseCard.jsx
│   │   │   │   ├── ExerciseForm.jsx
│   │   │   │   └── ExerciseDetail.jsx
│   │   │   ├── Workouts/
│   │   │   │   ├── WorkoutForm.jsx
│   │   │   │   ├── WorkoutSession.jsx
│   │   │   │   └── SetCounter.jsx
│   │   │   ├── History/
│   │   │   │   ├── WorkoutHistory.jsx
│   │   │   │   ├── ProgressChart.jsx
│   │   │   │   └── Statistics.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── PrivateRoute.jsx
│   │   │   └── Layout.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   ├── api.js              # Configuración Axios
│   │   │   ├── authService.js      # Peticiones de autenticación
│   │   │   ├── exerciseService.js  # Peticiones de ejercicios
│   │   │   └── workoutService.js   # Peticiones de entrenamientos
│   │   ├── utils/
│   │   │   └── validators.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── README.md
│
├── server/                          # Backend Node.js + Express
│   ├── config/
│   │   ├── database.js             # Conexión PostgreSQL
│   │   └── multer.js               # Configuración de uploads
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── exerciseController.js
│   │   ├── workoutController.js
│   │   └── historyController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Exercise.js
│   │   ├── Workout.js
│   │   ├── WorkoutExercise.js
│   │   ├── ExerciseSet.js
│   │   └── index.js                # Relaciones entre modelos
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── exerciseRoutes.js
│   │   ├── workoutRoutes.js
│   │   └── historyRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js       # Verificación de JWT
│   │   ├── uploadMiddleware.js     # Manejo de archivos
│   │   └── errorHandler.js
│   ├── validators/
│   │   ├── authValidator.js
│   │   ├── exerciseValidator.js
│   │   └── workoutValidator.js
│   ├── utils/
│   │   └── helpers.js
│   ├── uploads/                    # Archivos multimedia locales
│   │   ├── images/
│   │   └── videos/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── README.md
│
├── database/
│   ├── schema.sql                  # Script de creación de tablas
│   ├── seeds.sql                   # Datos de prueba
│   └── migrations/
│
├── docs/
│   ├── API.md                      # Documentación de endpoints
│   ├── DATABASE.md                 # Esquema de base de datos
│   └── DEPLOYMENT.md               # Guía de despliegue
│
├── .gitignore
├── README.md
└── docker-compose.yml              # (Opcional) Para PostgreSQL
