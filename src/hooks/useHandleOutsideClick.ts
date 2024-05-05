import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useHandleOutsideClick = (
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
  isMenuOpen?: boolean,
  toggleLockScreen?: () => void,
) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);

        if (isMenuOpen) {
          toggleLockScreen?.();
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, setIsMenuOpen, toggleLockScreen]);

  return menuRef;
};
