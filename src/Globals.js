import React from 'react';
import { Global, css } from '@emotion/core';

export const globalStyles = css`
  @import url('https://rsms.me/inter/inter-ui.css');

  html {
    font-family: 'Inter UI', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter UI var alt', sans-serif;
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #303133;
    color: #ffffff;
    font-family: 'Inter UI', sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  h1 {
    font-weight: 900;
    font-style: italic;
    font-size: 40px;
    line-height: 48px;
    margin: 0;
  }
  h2 {
    font-style: italic;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #ccd0d9;
    margin: 0;
  }
  p {
    font-size: 21px;
    line-height: 48px;
    margin: 0;
    margin-bottom: 64px;
    .highlight {
      background: #87ceeb88;
    }
  }
`;

const MyGlobalStyles = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {children}
    </React.Fragment>
  );
};

export default MyGlobalStyles;
