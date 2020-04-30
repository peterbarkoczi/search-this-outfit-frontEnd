import React, {useContext, useEffect} from "react";
import {PictureContext} from "../context/PictureContext";

function SideBar() {

    const {
        pictureResults
    } = useContext(PictureContext)

    return (
        <div className="sidebar">
            <ul>
                <button>button_1</button>
                <button>button_2</button>
                <button>button_3</button>
            </ul>
        </div>

    )


}

export default SideBar;