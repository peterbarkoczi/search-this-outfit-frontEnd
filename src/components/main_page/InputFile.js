import React, {useContext, useEffect} from "react";
import {PictureContext} from "../context/PictureContext";
import axios from "axios";

function InputField() {

    const {
        currentPicture,
        setCurrentPicture,
        pictureURL,
        setPictureURL,
        setPictureResults,
    } = useContext(PictureContext)

    const fileSelectedHandler = event => {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onloadend = () => {
            setPictureURL(reader.result);
            setCurrentPicture(file)

        }
        reader.readAsDataURL(file)

    }


    useEffect(() => {
        if (currentPicture !== null ) {
            console.log(pictureURL);
            const url = "http://localhost:5000/picture/upload";

            axios.post(url, {"currentPicture": pictureURL})
                .then(response => console.log(response))
                .catch(reason => {console.log("mimanó" + reason)})
        }
    }, [currentPicture])



    return (
            <div className="image-upload-div">
                <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
            </div>

    );
}

export default InputField;