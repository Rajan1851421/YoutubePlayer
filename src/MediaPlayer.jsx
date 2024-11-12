import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

function MediaPlayer({ videoUrl }) {
    useEffect(() => {
        console.log("Video URL from props:", videoUrl);
    }, [videoUrl]); // Add videoUrl to the dependency array to log when it changes

    return (
        <div className="flex justify-center items-center">
            <ReactPlayer
                className="mt-2"
                url={videoUrl} // Use the passed videoUrl prop here
                controls={true}               // Show native player controls
                playing={true}                 // Autoplay video
                loop={false}                   // Do not loop video
                volume={0.8}                   // Set volume to 80%
                muted={false}                  // Do not mute video
                playbackRate={1.5}             // Set playback rate to 1.5x speed
                width="800px"                  // Custom width
                height="450px"                 // Custom height
                progressInterval={500}         // Update progress every 500ms
                playsinline={true}             // Play inline where supported
                pip={true}                     // Enable picture-in-picture
                stopOnUnmount={false}          // Keep playing in PiP mode after unmount
                playIcon={<button>Play</button>} // Custom play icon
                wrapper="div"                  // Wrapper element type
                style={{ borderRadius: '8px', overflow: 'hidden' }} // Inline styles for player container
            />
        </div>
    );
}

export default MediaPlayer;
