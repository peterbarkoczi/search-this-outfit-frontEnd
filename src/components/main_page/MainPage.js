import React from "react";
import InputField from "./InputFile";
import SideBar from "./SideBar";
import PictureResults from "./PictureResults";
import styled from "styled-components";


const MainPageStyle = styled.div`
  .main-page {
     display: grid;
     grid-template-columns: 2fr 2fr 2fr;
     grid-template-rows: minmax(250px, auto) auto;
     grid-template-areas:
                        "none input sidebar"
                        "pictures pictures pictures";
  }
  
  @media screen and (max-width: 1024px) {
      .main-page {
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: minmax(250px, auto) auto auto;
     grid-template-areas:
                        "input"
                        "sidebar"
                        "pictures";
    }
  }
`;


function MainPage() {



    return (
        <MainPageStyle>
            <div className="main-page">
                <InputField/>
                <SideBar/>
                <PictureResults/>
            </div>
        </MainPageStyle>
    )
}

export default MainPage