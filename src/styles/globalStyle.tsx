import { css, Global } from '@emotion/react';
import reset from './reset';

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

  ${reset}

  :root {
    --color-black: #000;
    --color-white: #fff;
    --color-blue-100: #e8f2ff;
    --color-blue-500: #4b96ff;
    --color-slate-500: #a9adc1;
    --color-gray-100: #f7f7f7;
    --color-gray-200: #e6e9ee;
    --color-gray-300: #dde0e4;
    --color-gray-400: #818890;
    --color-gray-500: #535661;
    --color-gray-600: #4b4c53;
    --color-gray-700: #3a3d4a;
    --color-gray-800: #2e3039;
    --color-gray-900: #1f2028;
    --color-green-100: #e7f9ed;
    --color-green-500: #30c85e;
    --color-green-600: #68d94a;
    --color-red-500: #ff4545;
    --color-yellow-500: #ffd644;
    --color-team-unknown: #818890;
    --color-team-blue: #36a3ff;
    --color-team-red: #ff4545;
    --color-team-yellow: #a08600;
    --color-yellow-500: #a08600;
    --color-yellow-500-inverted: #ffd644;

    --font-light: 300;
    --font-regular: 400;
    --font-medium: 500;
    --font-bold: 700;
    --font-black: 900;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }

  body {
    height: 100%;
  }

  #___gatsby {
    height: inherit;
    background-color: var(--color-white);
    overflow: auto;
  }
`;
