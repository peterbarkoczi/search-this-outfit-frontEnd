import {createGlobalStyle} from "styled-components";
import myImage from 'street.jpg';

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
        
        
        /*animation: change 30s ease-in-out infinite;*/
    }
    
    .backGround {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-image: url(${myImage});
        opacity: 0.9;
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