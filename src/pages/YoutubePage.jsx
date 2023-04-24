import { Container } from '@mui/material';
import { YoutubeTab } from '../components/Table/youtube';
import './yt.css';

const YoutubePage = () => {
  const videoIdList = [
    'FBtcTKQlRws',
    '4FIkFpzf5ro',
    'kKG3dcxkwZc',
    '7iHvwrmU8j8',
    'w1U8apL9GLE',
    '4FIkFpzf5ro',
    'pzJdpfJzL_Y',
    'Pub-NgkRuqA',
    'H5lslB3sKjI',
    'FyWLY-vvAy8',
    'P87QrirX1nU',
    'l9ctWJKfgSU',
    'C52x5-vOD20',
    '3PJsV23J0y8',
    'b6zKob3tlpw'
  ];

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {videoIdList.map((videoId) => (
        <YoutubeTab key={videoId} videoId={videoId} />
      ))}
    </Container>
  );
};

export default YoutubePage;
