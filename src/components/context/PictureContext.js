import React, { createContext, useState} from "react";

export const PictureContext = createContext();

const PictureContextProvider = (props) => {
    const [currentPicture, setCurrentPicture] = useState("hey");

    const changeCurrentPicture = props => {
        setCurrentPicture(props);
        console.log(currentPicture);
    }

    return (
        <PictureContext.Provider value={{
            currentPicture,
            setCurrentPicture,
            changeCurrentPicture
        }}>
            {props.children}
        </PictureContext.Provider>
    );
}

export default PictureContextProvider;