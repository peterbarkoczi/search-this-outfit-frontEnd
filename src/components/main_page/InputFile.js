import React, {useContext, useEffect} from "react";
import {PictureContext} from "context/PictureContext";
import axios from "axios";
import styled from "styled-components";

const InputFieldStyle = styled.div`
   .image-upload-div {
        display: flex;
        justify-content: right;
        align-items: center;
   }
   
   @media screen and (max-width: 1024px) {
       
   .image-upload-div {
      justify-content: center;
   }
}
    
`;


function InputField() {
    const {
        pictureURL,
        setPictureURL,
        setPictureResults
    } = useContext(PictureContext)

    const fileSelectedHandler = event => {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onloadend = () => {
            setPictureURL(reader.result);

        }
        reader.readAsDataURL(file)

    }

    useEffect(() => {
        if (pictureURL !== null) {
            const url = "http://192.168.1.134:8080/picture/upload";
            console.log(pictureURL)
            axios.post(url, {base64: pictureURL.split(',')[1]})
                .then(response => setPictureResults(response.data))
                .catch(reason => {
                    console.log("mimanó " + reason)
                })
        }
    }, [pictureURL])

    return (
        <InputFieldStyle>
            <div className="image-upload-div">
                <input type="file" className="custom-file-input" onChange={fileSelectedHandler}/>
            </div>
        </InputFieldStyle>
    );
}

export default InputField;