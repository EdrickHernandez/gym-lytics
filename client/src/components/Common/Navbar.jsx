import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // TODO: Implementar autenticación real
  const isAuthenticated = false; // Temporal

  const navLinks = [
    { label: 'Exercise', path: '/exercises' },
    { label: 'New exercise', path: '/exercises/new' },
    { label: 'New Workout', path: '/workouts/new' },
    { label: 'History', path: '/history' },
    { label: 'Statistics', path: '/statistics' },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: '#020216' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            GymTracker
          </Typography>

          {/* Links de navegación */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="inherit"
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Auth buttons */}
            {isAuthenticated ? (
              <Button
                component={RouterLink}
                to="/profile"
                color="inherit"
              
              >
                Perfil
              </Button>
            ) : (
              <>
               <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  color="red"
                  sx={{
                    backgroundColor: '#020216',
                    color: 'whitesmoke',
                    borderColor: '#020216',
                    
                    '&:hover': {
                      color: '#020216',
                      bgcolor: '#ffffff',
                      borderColor: '#ffffff',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="outlined"
                  color="inherit"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
