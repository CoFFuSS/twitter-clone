import { createPortal } from 'react-dom';
import { memo } from 'react';

import { TweetInputContainer } from '@/Components/TweetInputContainer';

import {
  Backdrop,
  Wrapper,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  ModalWindow,
} from './styled';

interface TweetModalProps {
  isShown: boolean;
  hide: () => void;
}

export const TweetModal = memo(({ isShown, hide }: TweetModalProps) => {
  const handleClose = () => {
    hide();
  };

  return isShown
    ? createPortal(
        <>
          <Backdrop />
          <Wrapper>
            <ModalWindow
              isShown={isShown}
              data-test-id='profile-modal'
            >
              <Header>
                <CloseButton
                  onClick={handleClose}
                  data-test-id='close-button'
                >
                  X
                </CloseButton>
              </Header>
              <Content>
                <InfoContainer>
                  <TweetInputContainer closeModal={hide} />
                </InfoContainer>
              </Content>
            </ModalWindow>
          </Wrapper>
        </>,
        document.body,
      )
    : null;
});
