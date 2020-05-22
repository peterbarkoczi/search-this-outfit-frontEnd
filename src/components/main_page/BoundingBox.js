import React from "react";
import styled from "styled-components";

const BoundingBox = styled.div`
    position: absolute;
    border-style: solid;
    border-color: #149df2;
    inset: ${props => `${props.top}%`} ${props => `${props.right}%`} ${props => `${props.bottom}%`} ${props => `${props.left}%`};
    z-index: 50;
    opacity: 0.1;
    transition: opacity 0.25s ease;
  
    
  
    div {
      position: absolute;
      top: 0;
      left: -1%;
      transform: translateY(-100%);
      color: white;
      font-weight: bold;
      background-color: #149df2;
      font-size: 1.3rem;
      border-radius: 2px;
      padding: 0 4px 3px 3px;
    }
    
    
`;

function BoundingBoxes({boundingBox, id, names}) {


    const top = (boundingBox.top_row * 100).toFixed(5);
    const right = 100 - (boundingBox.right_col * 100).toFixed(5);
    const left = (boundingBox.left_col * 100).toFixed(5);
    const bottom = 100 - (boundingBox.bottom_row * 100).toFixed(5);

    // const printSome = () => {
    //     console.log(labels)
    // }

    const addClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== event.target.getAttribute('data-label')) {
                box.classList.toggle('dim')
            }
        })
    }

    const removeClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== event.target.getAttribute('data-label')) {
                box.classList.toggle('dim')
            }
        })
    }

    return (        // `label-${id}`
        <BoundingBox top={top}
                     right={right}
                     left={left}
                     bottom={bottom}
                     data-label={id}
                     className={'bounding-box dim'}
                     onMouseOver={addClass}
                     onMouseOut={removeClass}
        >
            <div data-label={id}>{names[0]}</div>
        </BoundingBox>
    )
}

export default BoundingBoxes;