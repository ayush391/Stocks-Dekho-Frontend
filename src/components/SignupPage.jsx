import {
  Alert,
  Avatar,
  Button,
  Container,
  Divider,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDatabase, ref as refRDB, set } from 'firebase/database';

import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from './Firebase';
import CircularLoading from './Loading/CircularLoading';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [file, setFile] = useState({});
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ message: '', open: false, type: 'error' });
  const rdb = getDatabase(app);
  const handleOpen = (msg, type) => {
    setAlert({ message: msg, open: true, type: type });
  };
  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const auth = getAuth(app);
  const navigate = useNavigate();
  const storage = getStorage();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleText = (event) => {
    setName(event.target.value);
  };
  const uploadToRDB = async (picUrl, uid) => {
    await set(refRDB(rdb, 'User/' + uid), {
      username: name,
      desc: '',
      photoURL: picUrl
    });
  };
  const uploadImage = async (uid) => {
    if (file != {}) {
      const storageRef = ref(storage, uid + file.name);
      const response = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setProfileUrl(url);
      return url.toString();
    }
    return '';
  };
  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };
  const SignBtnHandler = async () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        let picUrl = await uploadImage(user.uid.toString());

        const response = await axios.post(import.meta.env.VITE_BASE_URL + '/user/signup', {
          userId: user.uid.toString()
        });
        await uploadToRDB(picUrl, user.uid.toString());
        updateProfile(user, {
          displayName: name.toString(),
          photoURL: picUrl
        }).then(() => {
          setLoading(false);
          handleOpen('Registeration Successful', 'success');
          setTimeout(() => navigate('/'), 2000);
        });
        sendEmailVerification(user)
          .then(() => {
            navigate(-1);
          })
          .catch((e) => navigate(-1));
      })
      .catch((e) => {
        setLoading(false);
        handleOpen(e.message, 'error');
      });
  };
  return (
    <Container maxWidth="sm" sx={{ marginY: 2 }}>
      <Stack
        gap={2}
        component="form"
        noValidate
        autoComplete="off"
        textAlign="center"
        alignItems="center">
        <Typography variant="h2">Welcome to </Typography>
        <Typography variant="h3" color="primary" fontWeight="bold">
          StoxDekho
        </Typography>
        <Typography variant="body2">Please enter your details to get started</Typography>
        <label>
          <Avatar style={{ width: 100, height: 100 }}></Avatar>
          <input type={'file'} style={{ display: 'none' }} onChange={handleFile} />
        </label>
        <TextField
          fullWidth
          type=""
          label="Name"
          placeholder="Enter your name"
          onChange={handleText}
        />
        <TextField
          fullWidth
          type="text"
          label="Email"
          placeholder="Enter your email"
          onChange={handleEmail}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={handlePassword}
        />

        <Button fullWidth variant="contained" size="large" onClick={SignBtnHandler}>
          Signup
        </Button>
        <Divider sx={{ my: 0 }} />
        <Stack>
          <Typography variant="caption" color="grey">
            Already registered?
          </Typography>
          <Typography variant="caption" color="primary" component={Link} to="/login">
            Login here
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
