import { createGlobalStyle } from 'styled-components'

export const { xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl, xxxxl } = {
  xxxs: '@media (max-width: 20rem)', // 320px
  xxs: '@media (max-width: 32rem)', // 512px
  xs: '@media (max-width: 38rem)', // 608px
  sm: '@media (max-width: 48rem)', // 768px
  md: '@media (max-width: 62rem)', // 992px
  lg: '@media (max-width: 64rem)', // 1024px
  xl: '@media (max-width: 80rem)', // 1280px
  xxl: '@media (max-width: 90rem)', // 1440px
  xxxl: '@media (max-width: 120rem)', // 1920px
  xxxxl: '@media (max-width: 160rem)', // 2560px
}
/**
 * key: _xx(%) percent
 * value: convert to hex
 */
export const opacityHex = {
  _0: '00',
  _10: '16',
  _20: '32',
  _30: '48',
  _40: '64',
  _50: '80',
  _60: '96',
  _70: 'aa',
  _80: 'cc',
  _90: 'ee',
}

export const palette = {
  background: '#EDEEF5',
  deepBackground: '#E8E8F4',
  basicAccent: '#4F19EB',
  basicAccent1: '#7C58FF',
  basicAccent2: '#BCAAFF',
  basicAccent3: '#C6BDE9',
  basicAccent4: '#E0D8FF',
  red: '#FF004E',
  black: '#000000',
  deepGray: '#5B5B5B',
  gray: '#D4D5E1',
}

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    *::placeholder {
      color: #C5C5C5 !important;
    }
    body {
        font-family: 'Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        overscroll-behavior: auto;
        user-select: none;
        background-color: ${palette.background};

        padding: 0;
        margin: 0;
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: inherit;
    }
    p {
      margin: 0;
      padding: 0;
    }
    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }

`
