import React, {useContext, useEffect, useCallback} from "react";
import {PictureContext} from "context/PictureContext";
import axios from "axios";
import styled from "styled-components";
import {useDropzone} from 'react-dropzone';
import BoundingBoxes from "./BoundingBox";


const getColor = (props) => {
    if (props.isDragAccept) {
        return '#078dcd';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#747272';
}

const DropZone = styled.div`
  grid-area: input;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1024px) { 
    justify-content: center;
  }
`;


const Container = styled.div`
  position: relative;
  margin: 5rem;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: rgba(213,210,210,0.84);
  color: #5a5757;
  outline: none;
  transition: border .24s ease-in-out, background-color .24s ease, border-color .24s ease;
  
  &:hover {
  cursor: pointer;
    background-color: rgba(190,222,236,0.65);
    border-color: #0a75c4;
  }
  
  @media screen and (max-width: 1024px) { 
     width: 300px;
  }
  
  @media screen and (max-width: 500px) { 
     width: 250px;
  }
  
  p {
  font-size: 1.5rem;
  font-weight: bold;
  }
  
  img {
  position: absolute;
  width: 100%;
  height: 100%;
  }
  
  .dim {
      opacity: 1;
    }
`;


function InputField() {
    const {
        labels,
        setLabels,
        pictureURL,
        setPictureURL,
    } = useContext(PictureContext)

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                setPictureURL(reader.result);

            }
            reader.readAsDataURL(file)
        })
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop
        ,accept: 'image/*'});

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
            const url = "http://172.18.0.2:3334/picture/upload";
            axios.post(url, {base64: pictureURL.split(',')[1]})
                .then(response => setLabels(response.data))
                .catch(reason => {
                    console.log("mimanó " + reason)
                })
        }
    }, [pictureURL])

    let id = 0;

    return (
        <DropZone>
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} onChange={fileSelectedHandler} />
                {!isDragActive && <p>Drag 'n' drop some files here,<br/> or click to select files</p>}
                {isDragAccept && <p style={{color: "#078dcd"}}>Drop here!</p>}
                {isDragReject && <p style={{color: "#ff1744"}} >You can't upload this type!</p>}
                {pictureURL !== null && <img className="current-image" src={pictureURL} alt=""/>}
                {pictureURL !==null && labels.map( (labels) => {
                    return <BoundingBoxes key={id++} {...labels} id={id}/>
                })}
            </Container>
        </DropZone>
    );
}

export default InputField;