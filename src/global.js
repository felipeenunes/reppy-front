import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        font-weight: normal;
    }

    button {
        cursor: pointer;
    }

    /* :root {
        --white: #FFFFFF; 
        --black: #000000;
        --gray: #F6F6F6;
        --violet: #A293FF;
        --red: #c53038;
        --green: #00FF19;
    }
     */
    body {
        background-color: var(--white);
        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden ;
        
        
        > div {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;
