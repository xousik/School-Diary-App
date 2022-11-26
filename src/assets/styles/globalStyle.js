import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'); */

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserat', sans-serif;
        overflow-y: hidden;
    }

    a, button {
        font-family: 'Montserat', sans-serif;
    }
`;
