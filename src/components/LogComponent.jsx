import { Alert, Box, Button, Snackbar } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from './Firebase';

export const LoginComponent = () => {
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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column'
      }}
      noValidate
      autoComplete="off">
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input id="component-simple" defaultValue="" type="email" onChange={handleEmail} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input id="component-simple" defaultValue="" type="password" onChange={handlePassword} />
      </FormControl>

      <Button onClick={LoginBtnHandler} style={{ backgroundColor: 'purple', color: 'white' }}>
        LogIn
      </Button>

      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
