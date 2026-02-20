import { Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px - 100px)', // viewport - navbar - footer
        bgcolor: 'white',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
