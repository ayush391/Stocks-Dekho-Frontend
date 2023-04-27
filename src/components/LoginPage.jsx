import {
  Alert,
  Button,
  Container,
  Divider,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppState';
import CircularLoading from './Loading/CircularLoading';

const LoginPage = () => {
  const { auth } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ message: '', open: false, type: 'error' });

  const handleOpen = (msg, type) => {
    setAlert({ message: msg, open: true, type: type });
  };
  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const LoginBtnHandler = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        setLoading(false);
        handleOpen('Login Successful', 'success');
        setTimeout(() => navigate('/'), 500);
      })
      .catch((e) => {
        setLoading(false);
        handleOpen(e.message, 'error');
      });
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

        <Typography variant="caption" color="grey" component={Link} to="/forgetpassword">
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
        <Modal open={loading} sx={{ height: '100%', width: '100%', backdropFilter: 'blur(5px)' }}>
          <>
            <CircularLoading />
          </>
        </Modal>
        <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
};

export default LoginPage;
