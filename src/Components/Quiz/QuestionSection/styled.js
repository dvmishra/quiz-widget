import { slideInRight, fadeInUp, flash } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const SlideInRightAnimate = styled.div`
  animation: 1.5s ${keyframes`${slideInRight}`} 1;
`;

export const FadeInUpAnimate = styled.div`
  animation: 1s ${keyframes`${fadeInUp}`} 1;
`;

export const GameOverAnimate = styled.div`
  animation: 1s ${keyframes`${flash}`} infinite;
`;

export const ScoreContainer = styled.section`
  border: 1px solid black;
`;

export const Score = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #3fb599;
`;
