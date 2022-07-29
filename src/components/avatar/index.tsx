import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import Boundary from './boundary';

export default function Avatar() {
  return (
    <Wrapper>
      <Boundary />
      <Box>
        <StaticImage src='../../../static/assets/avatar-transparent.png' alt='avatar' />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  top: 0.125rem;
  left: 0.45rem;
  width: 2.7rem;
  height: 2.7rem;
`;
