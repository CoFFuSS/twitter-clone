import { ChangeEvent, useState } from 'react';

import profileLogoExample from '@/assets/images/ProfileLogoExample.svg';
import { LogoContainer } from '@/mixins/styledMixins';
import UploadImgIcon from '@/assets/images/UploadImgIcon.svg';
import { uploadTweet } from '@/utils/uploadTweets';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';

import {
  ControlBlock,
  FileName,
  FilenameLabel,
  InputContainer,
  InputForFile,
  SendTweetButton,
  TweetFieldContainer,
  TweetInput,
  TweetInputBlock,
  UploadImage,
} from './styled';

export type FileType = Blob | Uint8Array | ArrayBuffer | null;

export const TweetInputContainer = () => {
  const { name, email, id } = useAppSelector(selectUser);
  const [textValue, setTextValue] = useState('');
  const [image, setImage] = useState<FileType>(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const sendTweet = async () => {
    try {
      await uploadTweet(textValue, name, email, image, id, setIsLoading);
      setTextValue('');
    } catch (e) {
      const error = e as Error;
      console.error(error);
      setTextValue('');
      setFileName('');
    } finally {
      setFileName('');
    }
  };

  return (
    <TweetFieldContainer>
      <LogoContainer>
        <img
          src={profileLogoExample}
          alt='profile logo'
        />
      </LogoContainer>
      <TweetInputBlock>
        <InputContainer>
          <TweetInput
            placeholder='What’s happening'
            onChange={handleChange}
            value={textValue}
          />
        </InputContainer>
        <ControlBlock>
          <FilenameLabel>
            <UploadImage
              src={UploadImgIcon}
              alt='upload img'
            />
            <InputForFile
              type='file'
              id='upload-photo'
              onChange={handlePhotoUpload}
            />
            {fileName && <FileName>{fileName}</FileName>}
          </FilenameLabel>
          <SendTweetButton onClick={sendTweet}>
            {isLoading ? <p>loading</p> : 'Tweets'}
          </SendTweetButton>
        </ControlBlock>
      </TweetInputBlock>
    </TweetFieldContainer>
  );
};