import { Box, CircularProgress } from '@mui/material';

const CircularLoading = ({ style }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        height: '50vh',
        ...style
      }}>
      <CircularProgress size="4rem" />
    </Box>
  );
};

export default CircularLoading;
