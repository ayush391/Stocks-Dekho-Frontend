import InventoryIcon from '@mui/icons-material/Inventory';
import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { LOCAL } from '../utils/routes';

const BankHistory = () => {
  return (
    <div>
      <Typography
        fontSize={28}
        component={Link}
        to={LOCAL.EXPLORE}
        marginBottom={1}
        sx={{
          backgroundColor: ' #c3defd',
          borderRadius: 10,
          color: 'white',
          width: '100%',
          display: 'flex',
          fontWeight: 'bolder',
          justifyContent: 'center'
        }}>
        Check Balance
      </Typography>

      <Container sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
        <Avatar
          src="https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596"
          sx={{ width: '50%', marginLeft: '28%', height: '50%', maxHeight: 200, maxWidth: 200 }}
        />
        <Typography marginTop={1} marginLeft={'35%'} sx={{ fontSize: 22, fontWeight: 'bolder' }}>
          Deepak Singh
        </Typography>
      </Container>

      <Stack direction={'row'}>
        <Card sx={{ width: '45%', marginRight: 2, marginLeft: 2, borderRadius: 10 }}>
          <CardHeader sx={{ textAlign: 'center' }} title={'Balance'}></CardHeader>
          <CardContent>
            <Typography component="h5" sx={{ textAlign: 'center' }}>
              1324
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: '45%', marginRight: 2, marginLeft: 2, borderRadius: 10 }}>
          <CardHeader title={'Portfolio Value'}></CardHeader>
          <CardContent>
            <Typography component="h5" sx={{ textAlign: 'center' }}>
              1234
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Card sx={{ margin: 2, borderRadius: 10 }}>
        <CardHeader title={'Transaction'} sx={{ textAlign: 'center' }}></CardHeader>
        <CardContent>
          <Stack
            direction={'row'}
            justifyContent={'space-evenly'}
            sx={{ marginBottom: 2, marginTop: 2 }}>
            <Avatar sx={{ backgroundColor: 'lightblue', color: 'black', marginRight: 2 }}>
              <InventoryIcon />
            </Avatar>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              Infosys
            </Typography>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              1498
            </Typography>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack
            direction={'row'}
            justifyContent={'space-evenly'}
            sx={{ marginBottom: 2, marginTop: 2 }}>
            <Avatar sx={{ backgroundColor: 'lightblue', color: 'black', marginRight: 2 }}>
              <InventoryIcon />
            </Avatar>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              Infosys
            </Typography>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              1498
            </Typography>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack
            direction={'row'}
            justifyContent={'space-evenly'}
            sx={{ marginBottom: 2, marginTop: 2 }}>
            <Avatar sx={{ backgroundColor: 'lightblue', color: 'black', marginRight: 2 }}>
              <InventoryIcon />
            </Avatar>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              Infosys
            </Typography>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              1498
            </Typography>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack
            direction={'row'}
            justifyContent={'space-evenly'}
            sx={{ marginBottom: 2, marginTop: 2 }}>
            <Avatar sx={{ backgroundColor: 'lightblue', color: 'black', marginRight: 2 }}>
              <InventoryIcon />
            </Avatar>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              Infosys
            </Typography>
            <Typography sx={{ marginRight: 2, marginTop: '0.25rem', fontSize: 22 }}>
              1498
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankHistory;
