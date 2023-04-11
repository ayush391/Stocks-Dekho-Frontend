import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

export const YoutubeTab = ({ videoId }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.8 });
  const playerRef = useRef(null);
  const opts = {
    height: window.innerHeight + 'px',
    width: window.innerWidth + 'px',
    playerVars: {}
  };

  const onPlayerReady = (event) => {
    console.log('player Ready ' + event);
  };

  // useEffect(() => {
  //   inView ? playerRef.current.playVideo() : playerRef.current.pauseVideo();
  // }, [inView]);
  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        maxWidth: 'sm'
      }}>
      <ReactPlayer
        playing={inView}
        ref={playerRef}
        controls={true}
        onReady={onPlayerReady}
        url={'https://www.youtube.com/shorts/QVdUBFPfOrg?autoplay=1'}
        title="Learn the Basics of Stock Market"
        width={'100%'}
        height={'700px'}
        // volume={10}
      />
    </div>
  );
};
