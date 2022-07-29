import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export default function Boundary() {
  return (
    <Wrapper>
      <Svg height='56' width='56' viewBox='0 0 56 56'>
        <Path
          d='M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z'
          fill='red'
        />
        <Path
          d='M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z'
          fill='blue'
        />
        <Path
          d='M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z'
          fill='chocolate'
        />
      </Svg>
    </Wrapper>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  animation: ${spin} 10s linear infinite;
`;

const Svg = styled.svg`
  display: block;
  vertical-align: center;
`;

const Path = styled.path``;
