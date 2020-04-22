import React, {Fragment, useContext} from "react";
import axios from "axios";
import {PictureContext} from "../context/PictureContext";

function InputField() {

    const {
        currentPicture,
        changeCurrentPicture
    } = useContext(PictureContext)

    const fileSelectedHandler = event => {
        changeCurrentPicture(event.target.files[0])

    }

    const fileUploadHandler = () => {

    }

    return (
        <div className="image-upload-div">
            <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
            <button onClick={fileUploadHandler} className="custom-file-btn">upload</button>
        </div>
    );
}

export default InputField;