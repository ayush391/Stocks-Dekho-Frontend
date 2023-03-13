import { Box, Button } from '@mui/material';
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
        navigate('/');
      })
      .catch((e) => alert(e));
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
    </Box>
  );
};
