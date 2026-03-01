import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';

// Common components
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import PrivateRoute from './components/Common/PrivateRoute';
import Layout from './components/Layout';

// Exercise components
import ExerciseList from './components/Exercises/ExerciseList';
import ExerciseCard from './components/Exercises/ExerciseCard';
import ExerciseForm from './components/Exercises/ExerciseForm';
import ExerciseDetail from './components/Exercises/ExerciseDetail';

// History components
import WorkoutHistory from './components/History/WorkoutHistory';
import ProgressChart from './components/History/ProgressChart';
import Statistics from './components/History/Statistics';

// Workout components
import WorkoutForm from './components/Workouts/WorkoutForm';
import WorkoutSession from './components/Workouts/WorkoutSession';
import SetCounter from './components/Workouts/SetCounter';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<ExerciseList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rutas de ejercicios */}
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
          <Route path="/exercises/new" element={<ExerciseForm />} />
          <Route path="/exercises/:id/edit" element={<ExerciseForm />} />
          
          {/* Rutas de workouts */}
          <Route path="/workouts/new" element={<WorkoutForm />} />
          <Route path="/workouts/:id" element={<WorkoutSession />} />
          
          {/* Rutas de historial */}
          <Route path="/history" element={<WorkoutHistory />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/progress/:exerciseId" element={<ProgressChart />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
