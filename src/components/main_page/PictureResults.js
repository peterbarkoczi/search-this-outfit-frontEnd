import React, {useContext} from "react";
import styled from "styled-components";
import {PictureContext} from "../../context/PictureContext";

const PictureResultsStyle = styled.div`
     grid-area: pictures;


    .pictureResults ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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

    const {pictureResults} = useContext(PictureContext)

    return (
        <PictureResultsStyle>
            <div className="pictureResults">
                <ul>
                    {pictureResults.map(cloth => {
                        console.log(cloth.id)
                        return <li>{cloth.id}</li>

                    } )}
                </ul>
            </div>
        </PictureResultsStyle>
    )

}


export default PictureResults;