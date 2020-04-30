import React, {useContext} from "react";
import InputField from "./InputFile";
import { PictureContext} from "../context/PictureContext";
import SideBar from "./SideBar";
import PictureResults from "./PictureResults";

function MainPage() {

    const {
        pictureURL
    } = useContext(PictureContext)

    return (
        <div className="main-page" >
            <div className="image-upload-container">
                <InputField />
                {pictureURL !== null && <img className="current-image" src={pictureURL} alt=""/>}
            </div>

            <SideBar />
            <PictureResults />
        </div>
    )
}

export default MainPage