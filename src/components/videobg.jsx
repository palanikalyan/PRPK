import React from 'react';

const VideoBackground = ({ videoSrc, overlayColor = 'rgba(10, 25, 47, 0.85)' }) => {
  const videoStyle = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: -1000,
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: overlayColor,
    zIndex: -999,
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={videoStyle}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={overlayStyle}></div>
    </>
  );
};

export default VideoBackground;