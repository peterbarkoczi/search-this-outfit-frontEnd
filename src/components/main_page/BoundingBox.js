import React, {useContext} from "react";
import styled from "styled-components";

const BoundingBox = styled.div`
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: aqua;
    inset: ${props => `${props.top}%`} ${props => `${props.right}%`} ${props => `${props.bottom}%`} ${props => `${props.left}%`};
    z-index: 50;
  
`;

function BoundingBoxes(labels) {


    const top = (labels.boundingBox.top_row * 100).toFixed(5);
    const right = 100 - (labels.boundingBox.right_col * 100).toFixed(5);
    const left = (labels.boundingBox.left_col * 100).toFixed(5);
    const bottom = 100 - (labels.boundingBox.bottom_row * 100).toFixed(5);

    const printSome = () => {
        console.log(labels)
    }

    return (
        <BoundingBox top={top} right={right} left={left} bottom={bottom}>
            {printSome()}
        </BoundingBox>
    )
}

export default BoundingBoxes;