import React, {useContext} from "react";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";

const SideBarStyle = styled.div`
    .sidebar {
    grid-area: sidebar;

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


    const {} = useContext(PictureContext)

    return (
        <SideBarStyle>
            <div className="sidebar">
                <ul>
                    <button>button_1</button>
                    <button>button_2</button>
                    <button>button_3</button>
                </ul>
            </div>
        </SideBarStyle>
    )


}

export default SideBar;