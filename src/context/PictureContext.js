import React, { createContext, useState} from "react";

export const PictureContext = createContext();

export const PictureProvider= props => {
    const [pictureURL, setPictureURL] = useState(null);
    const [pictureResults, setPictureResults] = useState([]);
    const [faszok, setFaszok] = useState([])

    return (
        <PictureContext.Provider value={{
            faszok,
            setFaszok,
            pictureURL,
            setPictureURL,
            pictureResults,
            setPictureResults
        }}>
            {props.children}
        </PictureContext.Provider>
    );
}