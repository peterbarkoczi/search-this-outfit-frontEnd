import React, {useContext} from "react";
import InputField from "./InputFile";
import SideBar from "./SideBar";
import PictureResults from "./PictureResults";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";


const MainPageStyle = styled.div`
  .main-page {
     display: grid;
     grid-template-columns: 2fr 2fr 2fr;
     grid-template-rows: minmax(250px, auto) 1fr;
     grid-template-areas:
                        "none input sidebar"
                        "pictures pictures pictures";
  }
  
  @media screen and (max-width: 1024px) {
      .main-page {
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: minmax(250px, auto) auto 1fr;
     grid-template-areas:
                        "input"
                        "sidebar"
                        "pictures";
    }
  }
`;


function MainPage() {

    const {
        pictureURL
    } = useContext(PictureContext)

    return (
        <MainPageStyle>
            <div className="main-page">
                <InputField/> {/*{pictureURL !== null && <img className="current-image" src={pictureURL} alt=""/>}*/}
                <SideBar/>
                <PictureResults/>
            </div>
        </MainPageStyle>
    )
}

export default MainPage