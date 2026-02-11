# Plan de Desarrollo GymTracker - Día a Día

## 📆 Semana 1: Setup y Fundamentos

### Día 1: Estructura del Proyecto
- [ ] Crear estructura de carpetas `client/` y `server/`
- [ ] Inicializar proyecto frontend con Vite
- [ ] Inicializar proyecto backend con Express
- [ ] Configurar Git y crear repositorio

### Día 2: Frontend Base
- [ ] Instalar dependencias frontend: React Router, Axios, Material-UI
- [ ] Crear estructura de componentes
- [ ] Configurar App.jsx con rutas básicas
- [ ] Crear Navbar y Layout

### Día 3: Backend Base
- [ ] Instalar dependencias backend: Express, pg, Sequelize
- [ ] Crear archivo server.js
- [ ] Configurar conexión a PostgreSQL
- [ ] Crear primera ruta "/api/health"

### Día 4: Base de Datos (Schema)
- [ ] Crear archivo database/schema.sql
- [ ] Diseñar modelo User (email, password, nombre, edad, peso, altura)
- [ ] Ejecutar schema en PostgreSQL local

---

## 📆 Semana 2: Autenticación

### Día 5: Modelo y Controlador User
- [ ] Crear modelo User.js en Sequelize
- [ ] Crear validadores con bcrypt
- [ ] Crear authController.js

### Día 6: Rutas de Auth API
- [ ] Crear authRoutes.js
- [ ] Implementar POST /register
- [ ] Implementar POST /login
- [ ] Configurar JWT

### Día 7: Frontend Auth (Login/Register)
- [ ] Crear componente Login.jsx
- [ ] Crear componente Register.jsx
- [ ] Configurar authService.js
- [ ] Conectar con API

---

## 📆 Semana 3: Gestión de Ejercicios

### Día 8: Modelo Exercise
- [ ] Crear modelo Exercise.js
- [ ] Campos: nombre, descripción, grupo_muscular, imagen, video

### Día 9: CRUD Ejercicios API
- [ ] exerciseController.js (create, read, update, delete)
- [ ] exerciseRoutes.js
- [ ] Subida de archivos con Multer

### Día 10: Frontend Ejercicios
- [ ] ExerciseList.jsx (catálogo)
- [ ] ExerciseCard.jsx
- [ ] ExerciseForm.jsx
- [ ] Búsqueda y filtros

---

## 📆 Semana 4: Ejercicios Detalle y Media

### Día 11: Detalle Ejercicio
- [ ] ExerciseDetail.jsx
- [ ] Integrar React Player para videos
- [ ] Mostrar instrucciones y tips

### Día 12: Backend Media
- [ ] Configurar Multer para uploads
- [ ] Carpeta uploads/images y uploads/videos
- [ ] Servir archivos estáticos

### Día 13: Frontend Media
- [ ] Preview de imagen antes de subir
- [ ] Preview de video
- [ ] Componente de carga

---

## 📆 Semana 5: Registro de Entrenamientos

### Día 14: Modelos Workout
- [ ] Workout.js (fecha, usuario, estado)
- [ ] WorkoutExercise.js (relación)
- [ ] ExerciseSet.js (series: repeticiones, peso)

### Día 15: Workout API
- [ ] workoutController.js
- [ ] workoutRoutes.js
- [ ] Iniciar/Finalizar entrenamiento

### Día 16: Frontend Workout Form
- [ ] WorkoutForm.jsx
- [ ] Selector de ejercicios desde catálogo
- [ ] Agregar ejercicios al entrenamiento

---

## 📆 Semana 6: Series y Contador

### Día 17: Contador de Series
- [ ] SetCounter.jsx
- [ ] Input: repeticiones, peso
- [ ] Botones: +1, -1, guardar

### Día 18: Workout Session UI
- [ ] WorkoutSession.jsx
- [ ] Lista de ejercicios agregados
- [ ] Progress bar de sesión

### Día 19: Guardar Entrenamiento
- [ ] Conectar con API para guardar
- [ ] Validar datos antes de enviar
- [ ] Mostrar resumen post-entreno

---

## 📆 Semana 7: Historial

### Día 20: History API
- [ ] historyController.js
- [ ] GET /history (filtros por fecha)
- [ ] GET /history/:id

### Día 21: Frontend History
- [ ] WorkoutHistory.jsx
- [ ] Lista de entrenamientos
- [ ] Tarjetas con resumen

### Día 22: Filtros y Búsqueda
- [ ] Filtro por fecha
- [ ] Filtro por ejercicio
- [ ] Búsqueda textual

---

## 📆 Semana 8: Estadísticas y Gráficos

### Día 23: Stats API
- [ ] Calcular volumen total
- [ ] Peso máximo por ejercicio
- [ ] Frecuencia de entrenamiento

### Día 24: Statistics Component
- [ ] Statistics.jsx
- [ ] Cards con métricas
- [ ] Resumen semanal/mensual

### Día 25: Gráficos con Recharts
- [ ] ProgressChart.jsx
- [ ] Evolución de peso por ejercicio
- [ ] Línea de tiempo de progreso

---

## 📆 Semana 9: Perfil y Mejoras

### Día 26: Perfil Usuario
- [ ] Profile.jsx
- [ ] Editar datos personales
- [ ] Objetivos de entrenamiento

### Día 27: Refactorización
- [ ] Limpiar código
- [ ] Consolidar servicios API
- [ ] Manejo de errores

### Día 28: Testing y Documentación
- [ ] Probar flujos principales
- [ ] Documentar API
- [ ] README.md actualizado

---

## 📆 Notas

- **Pausa sugerida**: Cada 2-3 días de código intenso, dedicar 1 día a revisión y descanso
- **Backup**: Hacer commit en Git al final de cada día
- **Flexibilidad**: Ajustar días según ritmo personal

## 🎯 Objetivos por Semana (Resumen)

| Semana | Objetivo Principal |
|--------|-------------------|
| 1 | Setup + Base de Datos |
| 2 | Autenticación completa |
| 3 | CRUD Ejercicios |
| 4 | Media (imágenes/videos) |
| 5 | Registrar entrenamientos |
| 6 | Series y contador |
| 7 | Historial |
| 8 | Estadísticas y gráficos |
| 9 | Perfil y pulido |
