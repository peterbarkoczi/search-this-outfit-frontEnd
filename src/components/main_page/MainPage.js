import React, {useContext} from "react";
import InputField from "./InputFile";
import SideBar from "./SideBar";
import PictureResults from "./PictureResults";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";


const MainPageStyle = styled.div`
  .main-page {
     display: grid;
     justify-content: center;
     height: 92vh;
     grid-template-columns: 1fr 5fr 1fr;
     grid-template-rows: minmax(50px, auto) 1fr;
     grid-template-areas:
                        "input input input"
                        "sidebar pictures none";
  }

  .image-upload-container {
     grid-area: input;
     display: flex;
     flex-direction: column;
  }

  .current-image {
     position: relative;
     left: 40vw;
     width: 200px;
     height: 200px;
  }
`;


function MainPage() {

    const {
        pictureURL
    } = useContext(PictureContext)

    return (
        <MainPageStyle>
            <div className="main-page">
                <div className="image-upload-container">
                    <InputField/>
                    {pictureURL !== null && <img className="current-image" src={pictureURL} alt=""/>}
                </div>

                <SideBar/>
                <PictureResults/>
            </div>
        </MainPageStyle>
    )
}

export default MainPage