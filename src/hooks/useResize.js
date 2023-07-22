import { useState, useEffect } from 'react';

export function useResize() {
  const [windowWidthSize, setWindowSize] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      handleResize();
    }, 1000)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidthSize;
};
