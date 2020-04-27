import React, {useContext} from "react";
import InputField from "./InputFile";
import { PictureContext} from "../context/PictureContext";

function MainPage() {

    const {
        currentPicture
    } = useContext(PictureContext)

    return (
        <div className="main-page" >
            <InputField />
            {currentPicture !== null && <img className="current-image" src={currentPicture} alt=""/>}

        </div>
    )
}

export default MainPage