import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useHandleOutsideClick = (setIsMenuOpen: Dispatch<SetStateAction<boolean>>) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setIsMenuOpen]);

  return [menuRef] as const;
};
