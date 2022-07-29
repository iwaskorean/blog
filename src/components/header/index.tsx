import styled from '@emotion/styled';
import Avatar from '@components/avatar';
import Logo from './logo';
import Nav from './nav';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
      <Avatar />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 3rem;
`;
