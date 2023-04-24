import { Container } from '@mui/material';

const EventsPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      <h1>Event Page</h1>
      <h3 style={{ textAlign: 'center' }}>Nothing to show here</h3>
    </Container>
  );
};
export default EventsPage;
