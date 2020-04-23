import React, {useContext} from "react";
import InputField from "./InputFile";
import { PictureContext} from "../context/PictureContext";

function MainPage() {

    const {
        currentPicture
    } = useContext(PictureContext)

    return (
        <div className="main-page" >
            <h4 className="title">
                <i className="fas fa-user-tie" /> Search This Outfit
            </h4>
            <InputField />
            {currentPicture !== null && <img src={currentPicture.filePath} alt=""/>}

        </div>
    )
}

export default MainPage