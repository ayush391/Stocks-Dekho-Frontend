import { Avatar, Box, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from './Firebase';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [file, setFile] = useState({});
  const [previewImage, setPreviewImage] = useState('');
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

  const uploadImage = async (uid) => {
    if (file != {}) {
      const storageRef = ref(storage, uid + file.name);
      const response = await uploadBytes(storageRef, file);
      console.log('Uploaded a blob or file!', response);
      const url = await getDownloadURL(storageRef);
      console.log(url);
      setProfileUrl(url);
    }
  };
  const handleFile = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };
  const SignBtnHandler = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        await uploadImage(user.uid.toString());
        
        const response = await axios.post(import.meta.env.VITE_BASE_URL + '/user/signup', {
          userId: user.uid.toString()
        });

        updateProfile(user, {
          displayName: name.toString(),
          photoURL: profileUrl.toString()
        }).then(() => {
          console.log('profile set up complete');
        });
        sendEmailVerification(user)
          .then(() => {
            console.log('email sent sucessfully');
            navigate(-1);
          })
          .catch((e) => navigate(-1));
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
      <label>
        <Avatar style={{ marginLeft: '40%' }}></Avatar>
        <input type={'file'} style={{ display: 'none' }} onChange={handleFile} />
      </label>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" defaultValue="" type="text" onChange={handleText} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input id="component-simple" defaultValue="" type="email" onChange={handleEmail} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input id="component-simple" defaultValue="" type="password" onChange={handlePassword} />
      </FormControl>

      <Button onClick={SignBtnHandler}>SignUp</Button>
    </Box>
  );
};
