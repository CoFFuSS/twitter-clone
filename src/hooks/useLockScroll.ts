import { useEffect, useState } from 'react';

export const useLockScreen = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    const { body } = document;

    if (isLocked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    return () => {
      body.style.overflow = 'visible';
    };
  }, [isLocked]);

  return () => {
    setIsLocked((prevIsLocked) => !prevIsLocked);
  };
};
