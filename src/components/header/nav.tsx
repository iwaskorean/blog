import styled from '@emotion/styled';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <Wrapper>
      <Item to='/about'>About</Item>
      <Item to='/blog'>Blog</Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex: 1;
`;

const Item = styled(Link)`
  position: relative;
  font-size: 1.1rem;
  justify-self: flex-end;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-black);
    left: 0;
    top: 1.8rem;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 0.2s ease-in;
  }

  &:hover {
    &::after {
      transform: scale(1, 1);
    }
  }
`;
