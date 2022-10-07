import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

  ${reset} 

    *{
        box-sizing: border-box;
    }
    body{
      font-family: 'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic', sans-serif;
      font-weight: 400;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

`;

export default GlobalStyles;
