import React, {useContext} from "react";
import styled from "styled-components";
import {PictureContext} from "../../context/PictureContext";

const PictureResultsStyle = styled.div`
     grid-area: pictures;
     

    p {
      color: #ddd0aa;
      display: flex;
      justify-content: center;
      padding-top: 8rem;
      font-size: 3rem;
    }

    .pictureResults ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
    }
    
    @media screen and (max-width: 1235px) {
        .pictureResults ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
    @media screen and (max-width: 930px) {
        .pictureResults ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media screen and (max-width: 620px) {
        .pictureResults ul {
            grid-template-columns: 1fr;
        }
    }
    
    .pictureResults li {
        display: flex;
        width: 250px;
        height: 400px;
        color: black;
        border-radius: 0.5rem;
        background-color: #d2c9c9;
        justify-content: center;
        margin: 3rem;
        align-items: center;
        transition: background-color 0.25s ease;
    
    }

    .pictureResults li:hover {
        background-color: #54555f;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    }
`;

function PictureResults() {

    const {pictureResults} = useContext(PictureContext)

    return (
        <PictureResultsStyle>
            {pictureResults.length === 0 && <p className="message-for-pictures" >Add a picture then click on a label to see the products!</p>}
            <div className="pictureResults">
                <ul>
                    {pictureResults.map(cloth => {
                        console.log(cloth)
                        return <li>{cloth.id}</li>

                    } )}
                </ul>
            </div>
        </PictureResultsStyle>
    )

}


export default PictureResults;