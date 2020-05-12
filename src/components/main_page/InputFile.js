import React, {useContext, useEffect} from "react";
import {PictureContext} from "context/PictureContext";
import axios from "axios";
import styled from "styled-components";

const InputFieldStyle = styled.div`
   .image-upload-div {
        display: flex;
        justify-content: center;
        align-items: center;
   }
    
`;


function InputField() {
    const {
        currentPicture,
        setCurrentPicture,
        pictureURL,
        setPictureURL,
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
        if (currentPicture !== null) {
            console.log(pictureURL);
            const url = "http://localhost:5000/picture/upload";

            axios.post(url, {"currentPicture": pictureURL})
                .then(response => console.log(response))
                .catch(reason => {
                    console.log("mimanó" + reason)
                })
        }
    }, [currentPicture])

    return (
        <InputFieldStyle>
            <div className="image-upload-div">
                <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
            </div>
        </InputFieldStyle>
    );
}

export default InputField;