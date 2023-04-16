import { Container } from '@mui/material';
import { YoutubeTab } from '../components/Table/youtube';
import './yt.css';

const YoutubePage = () => {
  const videoIdList = ['LILp_Lr7ENc', 'wwVAzm3ObWg', 'clEseZpv2yg', 'NqWJXk700FA', '_BkGh08iIfs'];

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {videoIdList.map((videoId) => (
        <YoutubeTab key={videoId} videoId={videoId} />
      ))}
    </Container>
  );
};

export default YoutubePage;
