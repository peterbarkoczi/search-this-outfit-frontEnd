import React, { createContext, useState} from "react";

export const PictureContext = createContext();

export const PictureProvider= props => {
    const [currentPicture, setCurrentPicture] = useState(null);

    return (
        <PictureContext.Provider value={{
            currentPicture,
            setCurrentPicture
        }}>
            {props.children}
        </PictureContext.Provider>
    );
}