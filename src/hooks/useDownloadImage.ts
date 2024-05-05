import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

import { storage } from '@/firebase';

export const useDownloadImage = (image: string) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const getImageUrl = async () => {
      if (image) {
        const url = await getDownloadURL(ref(storage, image));
        setImageURL(url);
      }
    };

    getImageUrl();
  }, [image, setImageURL]);

  return imageURL;
};
