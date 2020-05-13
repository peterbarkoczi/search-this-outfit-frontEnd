import React, {useContext} from "react";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";

const PictureResultsStyle = styled.div`
     grid-area: pictures;


    .pictureResults ul {
        display: flex;
        justify-content: space-around;
    }

    .pictureResults li {
        display: flex;
        width: 50px;
        height: 150px;
        color: black;
        border-radius: 0.5rem;
        background-color: #d2c9c9;
        justify-content: center;
        margin: 1rem;
        align-items: center;
    
    }

    img {
        width: 50px;
        height: 150px;
    }

    .pictureResults li:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    }
`;

function PictureResults() {

    const {faszok} = useContext(PictureContext)


    return (
        <PictureResultsStyle>
            <div className="pictureResults">
                <ul>
                    {!faszok[0] ? <li>picture_1</li> : <img  src={faszok[0]} alt=""/>}
                    {!faszok[1] ? <li>picture_2</li> : <img  src={faszok[1]} alt=""/>}
                    {!faszok[2] ? <li>picture_3</li> : <img  src={faszok[2]} alt=""/>}
                </ul>
            </div>
        </PictureResultsStyle>
    )

}


export default PictureResults;