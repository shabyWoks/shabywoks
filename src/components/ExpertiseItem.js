import React from 'react';



const ExpertiseItem = (props) => {
    return (
        <div className="flex-center flex-down" style={{marginBottom: '3.2rem'}}>
            <div className="expertise-item-body">
                <img src= {props.imageUrl}/>
            </div>
            <div className="expertise-rating">
                <div className="meter" style={{backgroundColor: `${props.color}88`, width: `${props.accuracy}%`}}></div>
            </div>
        </div>
    )
}

export default ExpertiseItem;