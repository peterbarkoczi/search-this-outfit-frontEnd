import React, {useContext} from "react";
import InputField from "./InputFile";
import { PictureContext} from "../context/PictureContext";

function MainPage() {

    const {
        pictureURL
    } = useContext(PictureContext)

    return (
        <div className="main-page" >
            <InputField />
            {pictureURL !== null && <img className="current-image" src={pictureURL} alt=""/>}

        </div>
    )
}

export default MainPage