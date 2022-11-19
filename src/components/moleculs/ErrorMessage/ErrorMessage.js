import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background-color: white;
  padding: 20px 25px 15px;
  color: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6.2s ease-in-out 1 reverse;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-top: 20px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    width: 35%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
`;

const ErrorMessage = () => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>Lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsum</p>
    </Wrapper>
  );
};

export default ErrorMessage;
