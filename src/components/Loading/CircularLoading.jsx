import { Box, CircularProgress } from '@mui/material';

const CircularLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        height: '50vh'
      }}>
      <CircularProgress size="4rem" />
    </Box>
  );
};

export default CircularLoading;
