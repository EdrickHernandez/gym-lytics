import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: '#020216',
        color: 'white',
        height: '150px',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          GymLytics - Track your workouts
        </Typography>
        <Typography variant="body2" align="center" sx={{ opacity: 0.7, mt: 1 }}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
