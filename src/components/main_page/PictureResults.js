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

    .pictureResults li:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    }
`;

function PictureResults() {

    const {} = useContext(PictureContext)


    return (
        <PictureResultsStyle>
            <div className="pictureResults">
                <ul>
                    <li>picture_1</li>
                    <li>picture_2</li>
                    <li>picture_3</li>
                </ul>
            </div>
        </PictureResultsStyle>
    )

}


export default PictureResults;