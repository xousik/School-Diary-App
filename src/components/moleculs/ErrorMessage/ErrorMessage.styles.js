import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

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
    transform: translateX(-50%) translateY(200%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background-color: white;
  padding: 20px 25px 15px;
  color: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  animation: ${slideAnimation} 0.7s ease-in-out 1 forwards, ${slideAnimation} 1s 6.2s ease-in-out 0.7 reverse forwards;

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
