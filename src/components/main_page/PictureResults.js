import React, { useEffect,useContext } from "react";
import {PictureContext} from "../context/PictureContext";

function PictureResults() {

    const {
        pictureResults
    } = useContext(PictureContext)
    
    
    return (
        <div className="pictureResults">
            <ul>
                <li>picture_1</li>
                <li>picture_2</li>
                <li>picture_3</li>
            </ul>
        </div>
    )
    
}


export default PictureResults;