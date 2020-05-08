import { css } from '@emotion/core';

export const globalStyle = css`
  body {
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
    }
  }
`;
