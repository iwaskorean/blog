import type { GatsbyBrowser } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyle from './src/styles/globalStyle';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
  <Wrapper>
    <GlobalStyle />
    {element}
  </Wrapper>
);

const Wrapper = styled.div``;
