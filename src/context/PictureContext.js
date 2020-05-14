import React, { createContext, useState} from "react";

export const PictureContext = createContext();

export const PictureProvider= props => {
    const [pictureURL, setPictureURL] = useState(null);
    const [labels, setLabels] = useState([])
    const [pictureResults, setPictureResults] = useState([]);

    return (
        <PictureContext.Provider value={{
            labels,
            setLabels,
            pictureURL,
            setPictureURL,
            pictureResults,
            setPictureResults
        }}>
            {props.children}
        </PictureContext.Provider>
    );
}