import React, {useContext} from "react";
import {PictureContext} from "../context/PictureContext";
import axios from "axios";

function InputField() {

    const {
        currentPicture,
        setCurrentPicture
    } = useContext(PictureContext)

    const fileSelectedHandler = event => {
        setCurrentPicture(event.target.files[0])
        console.log(currentPicture)

    }

    const fileUploadHandler = async () => {
        const url = "http://localhost:5000/picture/upload";
        await axios.post(url, {currentPicture})
            .then(response => console.log(response))
            .catch(reason => {console.log("mimanó" + reason)})
    }

    return (
        <div className="image-upload-div">
            <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
            <button onClick={fileUploadHandler} className="custom-file-btn">upload</button>
        </div>
    );
}

export default InputField;