import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  *,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Red Hat Text', sans-serif;
  }

  html{
    font-size: 100%;

    @media (min-width: 620px) {
		font-size: 120%;
	  }
    @media (min-width: 860px) {
      font-size: 140%;
    }
    @media (min-width: 1024px) {
      font-size: 160%;
    }
  }

`;
