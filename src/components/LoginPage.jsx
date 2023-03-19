import {
  Alert,
  Button,
  Container,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from './Firebase';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alert, setAlert] = useState({ message: '', open: false, type: 'error' });

  const handleOpen = (msg, type) => {
    setAlert({ message: msg, open: true, type: type });
  };
  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const LoginBtnHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log('logged in sucessfully');
        handleOpen('Login Successful', 'success');
        setTimeout(() => navigate('/'), 2000);
      })
      .catch((e) => handleOpen(e.message, 'error'));
  };
  return (
    <Container maxWidth="sm" sx={{ marginY: 5 }}>
      <Stack gap={2} component="form" noValidate autoComplete="off" textAlign="center">
        <Typography variant="h2">Hi there, </Typography>
        <Typography variant="h5">Welcome back to </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold">
          StoxDekho
        </Typography>
        <TextField
          type="text"
          label="Email"
          placeholder="Enter your email"
          onChange={handleEmail}
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={handlePassword}
        />

        <Typography variant="caption" color="grey">
          Forgot Password?
        </Typography>

        <Button variant="contained" size="large" onClick={LoginBtnHandler}>
          LogIn
        </Button>
        <Divider sx={{ my: 2 }} />
        <Stack>
          <Typography variant="caption" color="grey">
            Haven't registered yet?
          </Typography>
          <Typography variant="caption" color="primary" component={Link} to="/signup">
            Register now
          </Typography>
        </Stack>
        <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
};
