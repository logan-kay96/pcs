import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};


const WebcamComponent = () => {
  //#region Screen Size Shinnanigans

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth / 2,
    height: window.innerHeight / 2
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth / 2,
        height: window.innerHeight / 2
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //#endregion

  
  <Webcam 
    audio={false}
    height={dimensions.height}
    width={dimensions.width}
    screenshotFormat="image/jpeg"
    videoConstraints={videoConstraints}>

    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot()
        }}
      >
        Capture photo
      </button>
    )} 

  </Webcam>;

}