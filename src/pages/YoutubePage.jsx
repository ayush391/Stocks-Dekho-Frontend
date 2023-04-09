import { YoutubeTab } from '../components/Table/youtube';

const YoutubePage = () => {
  const videoIdList = ['LILp_Lr7ENc', 'wwVAzm3ObWg', 'clEseZpv2yg', 'NqWJXk700FA', '_BkGh08iIfs'];
  return (
    <div style={{ maxWidth: 'sm' }}>
      {videoIdList.map((videoId) => (
        <YoutubeTab videoId={videoId}/>
      ))}
    </div>
  );
};

export default YoutubePage;
