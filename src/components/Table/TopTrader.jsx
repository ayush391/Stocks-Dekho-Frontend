import { Avatar, Card, Stack, Typography, CardContent } from '@mui/material';
import { useData } from '../../hooks/useData';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from '../Firebase';

const CardView = ({ item, index }) => {
  const [name, setName] = useState('Name');
  const [photoURL, setPhotoUrl] = useState('');
  const getRdb = (uid) => {
    console.log('getRdb');
    const db = getDatabase(app);
    const userRef = ref(db, 'User/' + uid.toString());
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setName(data.username);
        setPhotoUrl(data.photoURL);
      }
    });
  };
  getRdb(item._id);
  return (
    <Card>
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Avatar
            src={
              photoURL != ''
                ? photoURL
                : 'https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596'
            }
            sx={{ width: '150px', height: '150px' }}
          />
          <Typography>
            <b>{index + 1}.</b> {name}
          </Typography>
          <Typography style={{ color: 'green' }}>{item.portfolio_value}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

const TopTrader = () => {
  const { data, isLoading, error } = useData(`/leader-board`);
  if (isLoading) {
    console.log(isLoading);
  } else {
    return (
      <div>
        <h2>Top-Performer</h2>
        <h5 style={{ color: 'red' }}>Become a member to unlock there profiles</h5>
        {data != null ? (
          data
            .sort((a, b) => b.portfolio_value - a.portfolio_value)
            .slice(0, 3)
            .map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <CardView item={item} index={index} />
            ))
        ) : (
          <></>
        )}
      </div>
    );
  }
};
export default TopTrader;
