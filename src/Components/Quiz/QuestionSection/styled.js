import { slideInRight, fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const SlideInRightAnimate = styled.div`
  animation: 1.5s ${keyframes`${slideInRight}`} 1;
`;

export const FadeInUpAnimate = styled.div`
  animation: 1s ${keyframes`${fadeInUp}`} 1;
`;
