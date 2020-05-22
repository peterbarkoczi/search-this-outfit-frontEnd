import React, {useContext} from "react";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";
import axios from "axios";

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
        background-color: #d2c9c9;
        border-color: #a39d9d;
        height: 40px;
        width: 150px;
        margin: 5px;
        transition: background-color .24s ease, border-color .25s ease;
    }

    .sidebar button:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
        background-color: #67adc9;
        border-color: #338caf;
        cursor: pointer;
    }
`;

function SideBar() {


    const {labels, setPictureResults} = useContext(PictureContext)
    let id = 0;

    const addClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        let id = event.target.getAttribute('data-id');
        boundingBoxes.forEach(box => {

            if (box.getAttribute('data-label') !== id) {
                box.classList.toggle('dim')
            }
        })
    }

    const removeClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        let id = event.target.getAttribute('data-id');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== id) {
                box.classList.toggle('dim')
            }
        })
    }

    const fileSelectedHandler = event => {
        event.preventDefault();
        const url = "http://localhost:8080/result?labelName=";
        axios.post(url + event.target.textContent)
            .then(response => setPictureResults(response.data))
            .catch(reason => {
                console.log("mimanó " + reason)
            })
    }

    return (
        <SideBarStyle>
            <div className="sidebar">
                <ul>
                    {labels.map( (labels) => {
                       return <button key={id++}
                                      data-id={id}
                                      onClick={fileSelectedHandler}
                                      onMouseOut={removeClass}
                                      onMouseOver={addClass}
                       >{labels.names[0]}</button>
                    })}
            {/*        <button>label_1</button>*/}
            {/*        <button>label_1</button>*/}
            {/*        <button>label_1</button>*/}
                </ul>
            </div>

        </SideBarStyle>
    )


}

export default SideBar;