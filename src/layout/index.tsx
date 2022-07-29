import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Header from '@components/header';

export default function Layout({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <Wrapper {...props}>
      <Header />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
