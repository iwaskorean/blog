import { css } from '@emotion/react';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
`;

export default reset;
