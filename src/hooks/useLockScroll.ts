import { useEffect } from 'react';

export const useLockScreen = (isLocked: boolean): void => {
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
};
