import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`

    :root{
        --greenpeace: #34CB79;
        --desaturado: #E1FAEC;
        --titulos: #322153;
        --textos: #6C6C80;
        --textosuporte: #A0A0B2;
        --blocos: #FFFFFF;
        --background: #F0F0F5;
        --primary-title: 54px;
        --secondary-title:36px;
        --title: 24px;
        --primary-text:14px;
        --secondary-title-font:16px;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        
    }

    body{
        background-color: var(--background);
    }

`