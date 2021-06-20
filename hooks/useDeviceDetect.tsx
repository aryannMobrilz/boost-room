import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
  type?: string;
};

function useDeviceDetect(): WindowSize | null {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: -1,
    height: -1
  });

  console.log('window', window.innerWidth);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    if (typeof window != 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width < 576) {
    return { ...windowSize, type: 'xs' };
  }
  if (windowSize.width >= 576 && windowSize.width < 768) {
    return { ...windowSize, type: 'sm' };
  }
  if (windowSize.width >= 768 && windowSize.width < 992) {
    return { ...windowSize, type: 'md' };
  }
  if (windowSize.width >= 992 && windowSize.width < 1200) {
    return { ...windowSize, type: 'lg' };
  }
  if (windowSize.width >= 1200 && windowSize.width < 1600) {
    return { ...windowSize, type: 'xl' };
  }
  if (windowSize.width >= 1600) {
    return { ...windowSize, type: 'xxl' };
  }

  return null;
}

export default useDeviceDetect;
