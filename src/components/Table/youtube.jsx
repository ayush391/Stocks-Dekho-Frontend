import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

export const YoutubeTab = ({ videoId }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.8 });
  const playerRef = useRef(null);

  const config = {
    youtube: {
      playerVars: {
        height: '700',
        width: '320'
      }
    }
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
        borderRadius: '20px'
      }}>
      <ReactPlayer
        playing={inView}
        ref={playerRef}
        // playsinline={false}
        muted={true}
        controls={true}
        onReady={onPlayerReady}
        url={'https://www.youtube.com/watch?v=' + videoId}
        title="Learn the Basics of Stock Market"
        width={'100%'}
        height={'640px'}
        config={config}
        // volume={10}
      />
    </div>
  );
};
