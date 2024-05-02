import { createPortal } from 'react-dom';

import {
  Backdrop,
  Wrapper,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  ModalWindow,
} from './styled';

import { TweetInputContainer } from '../TweetInputContainer';

interface TweetModalProps {
  isShown: boolean;
  hide: () => void;
}

export const TweetModal = ({ isShown, hide }: TweetModalProps) => {
  const handleClose = () => {
    hide();
  };

  const modal = (
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
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
