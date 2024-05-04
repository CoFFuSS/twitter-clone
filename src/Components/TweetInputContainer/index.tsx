import { ChangeEvent, memo, useState } from 'react';

import profileLogoExample from '@/assets/images/ProfileLogoExample.svg';
import { LogoContainer } from '@/mixins/styledMixins';
import UploadImgIcon from '@/assets/images/UploadImgIcon.svg';
import { uploadTweet } from '@/utils/uploadTweets';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { limitLength } from '@/utils/limitLength';

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
  Wrapper,
} from './styled';

export type FileType = Blob | Uint8Array | ArrayBuffer | null;

interface TweetInputProps {
  closeModal?: () => void;
}

export const TweetInputContainer = memo(({ closeModal }: TweetInputProps) => {
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
    if (textValue.length !== 0) {
      try {
        await uploadTweet(textValue, name, email, image, id, setIsLoading);
        setTextValue('');

        if (closeModal) {
          closeModal();
        }
      } catch (error) {
        console.error(error);
        setTextValue('');
        setFileName('');
      } finally {
        setFileName('');
      }
    }
  };

  return (
    <Wrapper>
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
              data-cy='tweet-input'
              placeholder='What’s happening'
              onChange={handleChange}
              value={textValue}
              maxLength={1000}
            />
            {textValue.length >= 1000 && <p>You input should be less than 1000</p>}
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
            </FilenameLabel>
            {fileName && <FileName>{limitLength(fileName, 10, true)}</FileName>}

            <SendTweetButton
              data-cy='send-tweet-button'
              onClick={sendTweet}
              disabled={textValue.length === 0}
            >
              {isLoading ? <p>loading</p> : <p>Tweet</p>}
            </SendTweetButton>
          </ControlBlock>
        </TweetInputBlock>
      </TweetFieldContainer>
    </Wrapper>
  );
});
