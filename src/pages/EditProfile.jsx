import { Avatar, Button, Container, Modal, Stack, TextField } from '@mui/material';
import { updateProfile } from 'firebase/auth';
import { getDatabase, ref as refRDB, set } from 'firebase/database';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../components/Firebase';
import CircularLoading from '../components/Loading/CircularLoading';
import { useAppContext } from '../context/AppState';

const EditProfile = () => {
  const { user } = useAppContext();
  const [name, setName] = useState('');
  const [file, setFile] = useState({});
  const [desc, setDesc] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();
  const rdb = getDatabase(app);
  const handleText = (event) => {
    setName(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };
  const uploadToRDB = async (picUrl) => {
    await set(refRDB(rdb, 'User/' + user?.uid), {
      username: name,
      desc: desc,
      photoURL: picUrl
    });
  };
  const uploadImage = async (uid) => {
    if (file != {}) {
      const storageRef = ref(storage, uid + file.name);
      const response = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url.toString();
    }
    return '';
  };
  const SignBtnHandler = async () => {
    setLoading(true);
    let picUrl = await uploadImage(user?.uid.toString());
    await uploadToRDB(picUrl);
    updateProfile(user, {
      displayName: name.toString() != '' ? name.toString() : user?.displayName,
      photoURL: picUrl != '' ? picUrl : user?.photoURL
    }).then(() => {
      setLoading(false);
      setTimeout(() => navigate('/'), 2000);
    });
  };
  return (
    <Container maxWidth="sm">
      <h1>Edit Profile </h1>
      <Stack
        gap={2}
        component="form"
        noValidate
        autoComplete="off"
        textAlign="center"
        alignItems="center">
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
          type=""
          label="Descibe"
          placeholder="Write something about yourself"
          onChange={handleDesc}
        />
        <Button fullWidth variant="contained" size="large" onClick={SignBtnHandler}>
          Edit Profile
        </Button>
      </Stack>
      <Modal open={loading} sx={{ height: '100%', width: '100%', backdropFilter: 'blur(5px)' }}>
        <>
          <CircularLoading />
        </>
      </Modal>
    </Container>
  );
};
export default EditProfile;
