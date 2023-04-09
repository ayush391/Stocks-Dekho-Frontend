import YouTube from 'react-youtube';

export const YoutubeTab = ({ videoId }) => {
  const opts = {
    height: window.innerHeight + 'px',
    width: window.innerWidth + 'px',
    playerVars: {}
  };
  return (
    <div
      style={{
        overflow: 'hidden',
        maxWidth: 'sm'
      }}>
      <YouTube videoId={videoId} title="Learn the Basics of Stock Market" opts={opts} />
    </div>
  );
};
