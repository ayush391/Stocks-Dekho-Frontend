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
import { getAuth  , sendPasswordResetEmail} from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../components/Firebase';
import CircularLoading from '../components/Loading/CircularLoading';
const ForgetPassword=()=>{
    const [email, setEmail] = useState('');
    const auth = getAuth(app)
    const navigate = useNavigate()
    const handleEmail = (event) => {
        setEmail(event.target.value);
      };

    const ResetBtnHandler = () => {
        if(email!=''){
            sendPasswordResetEmail(auth , email).then(()=>{
                navigate(-1);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
              });
        }

      }
    return(
        <Container maxWidth="sm" sx={{ marginY: 5 }}>
        <Stack gap={2} component="form" noValidate autoComplete="off" textAlign="center">
          <Typography variant="h2">Reset Password, </Typography>
          <TextField
          type="text"
          label="Email"
          placeholder="Enter your email"
          onChange={handleEmail}
        />
        <Button variant="contained" size="large" onClick={ResetBtnHandler} >
          Reset
        </Button>
        </Stack>
        </Container>
    )
}

export {ForgetPassword};