import React from 'react';

const PieWheel = (props) => {
    return (
        <div 
            className= { `pie ${props.selected === (props.index + 1) ? 'pie-active' : ''}` } 
            style= {{ transform : `rotate(${props.start}deg)`, backgroundColor: props.color }} 
            onClick={() => {
                props.onClick(props.index + 1);
            }}
        >
            <div className= "pie-content">{props.head}</div>
        </div>
    )
}

export default PieWheel;