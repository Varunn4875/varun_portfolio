import  { useEffect } from 'react';
import bgm from './assets/bgm.jpg'

const MyComponent = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgm})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      // Clean up when component unmounts
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      {/* <h1>Hello</h1>
      <p>This is a full screen background set on body.</p> */}
    </div>
  );
};

export default MyComponent;