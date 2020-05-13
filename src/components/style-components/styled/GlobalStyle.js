import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        font-size: 10px;
        font-family: "Lato", Arial, sans-serif;
    }
    
    body {
        height: 100vh;
        width: 100%;
        color: #fff;
        background: linear-gradient(-45deg, #9c3c32, #9a3253, #207899, #2583af);
        background-size: 400% 400%;
        position: relative;
        background-position: 80% 10%;
        /*animation: change 30s ease-in-out infinite;*/
    }
    
    @keyframes change {
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}

.container {
    position: relative;
    top: 8vh;
}
`;

export default GlobalStyle;