import { Container } from '@mui/material';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { YoutubeTab } from '../components/Table/youtube';
import './yt.css';

const YoutubePage = () => {
  const scrollRef = useRef(null);
  const videoIdList = ['LILp_Lr7ENc', 'wwVAzm3ObWg', 'clEseZpv2yg', 'NqWJXk700FA', '_BkGh08iIfs'];
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <Container
      ref={scrollRef}
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {videoIdList.map((videoId) => (
        <YoutubeTab key={videoId} videoId={videoId} />
      ))}
    </Container>
  );
};

export default YoutubePage;
