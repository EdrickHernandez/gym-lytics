import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper,
  Alert 
} from '@mui/material';

// Regex para validación
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^.{6,}$/; // Mínimo 6 caracteres

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  // Validar campo específico
  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'email') {
      if (!value) {
        error = 'El email es requerido';
      } else if (!EMAIL_REGEX.test(value)) {
        error = 'Ingresa un email válido';
      }
    }
    
    if (name === 'password') {
      if (!value) {
        error = 'La contraseña es requerida';
      } else if (!PASSWORD_REGEX.test(value)) {
        error = 'La contraseña debe tener al menos 6 caracteres';
      }
    }
    
    return error;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    
    // Validar en tiempo real
    const fieldError = validateField(name, value);
    
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: fieldError });
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos los campos antes de enviar
    const emailError = validateField('email', email);
    const passwordError = validateField('password', password);
    
    setErrors({ email: emailError, password: passwordError });
    
    // Si hay errores, no enviar
    if (emailError || passwordError) {
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });

      // Guardar token en localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redireccionar al home
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Iniciar Sesión
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Email@gmail.com"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email}
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            error={!!errors.password}
            helperText={errors.password}
            required
            margin="normal"
            variant="outlined"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            ¿No tienes cuenta?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
