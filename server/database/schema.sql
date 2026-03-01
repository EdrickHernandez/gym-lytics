-- Schema para GymLytics
-- Este archivo crea las tablas de la base de datos

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(100),
    edad INTEGER,
    peso DECIMAL(5, 2),  -- peso en kg (ej: 75.50)
    altura DECIMAL(5, 2), -- altura en cm (ej: 175.00)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Ejercicios
CREATE TABLE IF NOT EXISTS exercises (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    grupo_muscular VARCHAR(50),
    imagen VARCHAR(255),
    video VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Workouts (Entrenamientos)
CREATE TABLE IF NOT EXISTS workouts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    estado VARCHAR(20) DEFAULT 'activo', -- 'activo', 'completado', 'cancelado'
    duracion INTEGER, -- duracion en minutos
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Ejercicios en un Workout
CREATE TABLE IF NOT EXISTS workout_exercises (
    id SERIAL PRIMARY KEY,
    workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE,
    exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
    orden INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Series (Sets)
CREATE TABLE IF NOT EXISTS exercise_sets (
    id SERIAL PRIMARY KEY,
    workout_exercise_id INTEGER REFERENCES workout_exercises(id) ON DELETE CASCADE,
    set_number INTEGER NOT NULL,
    repeticiones INTEGER,
    peso DECIMAL(5, 2),      -- peso en kg
    completado BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Historial de Pesos (para gráficos)
CREATE TABLE IF NOT EXISTS weight_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
    peso DECIMAL(5, 2) NOT NULL,
    fecha DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar ejercicios de ejemplo
INSERT INTO exercises (nombre, descripcion, grupo_muscular) VALUES
('Press de banca', 'Ejercicio para pecho', 'Pecho'),
('Sentadilla', 'Ejercicio para piernas', 'Piernas'),
('Peso muerto', 'Ejercicio para espalda', 'Espalda'),
('Press militar', 'Ejercicio para hombros', 'Hombros'),
('Dominadas', 'Ejercicio para espalda y biceps', 'Espalda'),
(' curl de biceps', 'Ejercicio para biceps', 'Biceps'),
('Fondos', 'Ejercicio para pecho y triceps', 'Triceps'),
('Remo con barra', 'Ejercicio para espalda', 'Espalda');
