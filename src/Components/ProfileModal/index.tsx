import { createPortal } from 'react-dom';

import {
  Backdrop,
  Wrapper,
  HeaderText,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  ModalWindow,
} from './styled';

interface ProfileModalProps {
  isShown: boolean;
  hide: () => void;
}

export const ProfileModal = ({ isShown, hide }: ProfileModalProps) => {
  const handleClose = () => {
    hide();
  };

  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <ModalWindow
          isShown={isShown}
          data-test-id='currency-modal'
        >
          <Header>
            <HeaderText>Change User data</HeaderText>
            <CloseButton
              onClick={handleClose}
              data-test-id='close-button'
            >
              X
            </CloseButton>
          </Header>
          <Content>
            <InfoContainer />
          </Content>
        </ModalWindow>
      </Wrapper>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
