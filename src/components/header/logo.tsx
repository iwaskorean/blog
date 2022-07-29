import styled from '@emotion/styled';
import { Link } from 'gatsby';

export default function Logo() {
  return <Wrapper to='/'>Sewook Han.</Wrapper>;
}

const Wrapper = styled(Link)`
  font-size: 2rem;
  font-weight: var(--font-bold);
  letter-spacing: -0.1rem;
`;
