import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../components/Firebase';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const ResetBtnHandler = () => {
    if (email != '') {
      sendPasswordResetEmail(auth, email)
        .then(() => navigate(-1))
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };
  return (
    <Container maxWidth="sm" sx={{ marginY: 5 }}>
      <Stack gap={2} component="form" noValidate autoComplete="off" textAlign="center">
        <Typography variant="h2">Reset Password, </Typography>
        <TextField
          type="text"
          label="Email"
          placeholder="Enter your email"
          onChange={handleEmail}
        />
        <Button variant="contained" size="large" onClick={ResetBtnHandler}>
          Reset
        </Button>
      </Stack>
    </Container>
  );
};

export { ForgetPassword };
