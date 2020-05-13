import React, {useContext} from "react";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";

const SideBarStyle = styled.div`
    grid-area: sidebar;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px) {
    justify-content: center;
    }

    .sidebar ul {
        display: flex;
        flex-direction: column;
    }

    .sidebar button {
        border-radius: 0.5rem;
        background-color: #d2c9c9;
        width: 100px;
        margin: 5px;
    }

    .sidebar button:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    
    }
`;

function SideBar() {


    const {pictureResults} = useContext(PictureContext)
    let id = 0;

    return (
        <SideBarStyle>
            <div className="sidebar">
                <ul>
            {/*        {pictureResults.map( (labels) => {*/}
            {/*           return <button key={id++}>{labels.names[0]}</button>*/}
            {/*        })}*/}
                    <button>label_1</button>
                    <button>label_1</button>
                    <button>label_1</button>
                </ul>
            </div>

        </SideBarStyle>
    )


}

export default SideBar;