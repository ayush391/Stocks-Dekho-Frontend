import YouTube from 'react-youtube';

export const YoutubeTab = () =>{
    const opts = {
        height: '80%',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    return(
        <div >
            <YouTube style={{marginLeft:'auto' , marginRight:'auto'}} videoId='Xn7KWR9EOGQ' title='Learn the Basics of Stock Market' opts={opts} />
        </div>
    )
}