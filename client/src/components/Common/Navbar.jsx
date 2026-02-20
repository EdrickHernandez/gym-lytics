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
    <AppBar position="static" sx={{ bgcolor: '#0909d8', m: 0, p: 0 }}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters sx={{ minHeight: 'auto', px: 0}}>
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
            GymLytics
          </Typography>

          {/* Links de navegación */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="inherit"
               sx={{ 
                    '&:hover': {
                      color: '#020216',
                      bgcolor: '#ffffff',
                      borderColor: '#ffffff',
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
                  color="red"
                  variant='conteined'
                  sx={{
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
                  variant="conteined"
                  color="inherit"
                  sx={{
                    '&:hover': {
                      color: '#020216',
                      bgcolor: '#ffffff',
                      borderColor: '#ffffff',
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
