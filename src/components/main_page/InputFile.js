import React, {useContext, useEffect} from "react";
import {PictureContext} from "../context/PictureContext";
import axios from "axios";

function InputField() {

    const {
        currentPicture,
        setCurrentPicture,
        setPictureResults
    } = useContext(PictureContext)

    const fileSelectedHandler = event => {
        setCurrentPicture(event.target.files[0])

    }


    useEffect(() => {
        if (currentPicture !== null ) {
            console.log("hey");
            const url = "http://localhost:5000/picture/upload";
            axios.post(url, {currentPicture})
                .then(response => console.log(response))
                .catch(reason => {setPictureResults("mimanó" + reason)})
        }
    }, [currentPicture])



    return (
        <div className="image-upload-div">
            <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
        </div>
    );
}

export default InputField;