import { shake } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const ShakeAnimate = styled.div`
  animation: 1.5s ${keyframes`${shake}`} 2;
`;

export const TimeContainer = styled.h3`
  padding: 4px;
  margin: 0;
  width: 100px;
  text-align: center;
  border-radius: 0%;
  font-size: 36px;
  border: ${(props) => `1px solid ${props.background}`};
  font-family: 'Open Sans', sans-serif;
  background: ${(props) => props.background};
  color: white;
  border-radius: 12px;
  right: 10px;
  position: relative;
`;
