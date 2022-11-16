import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import ReactModal from 'react-modal';

const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  &:focus {
    outline: none;
  }
`;

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper appElement={document.getElementById('modal-container')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close Modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
