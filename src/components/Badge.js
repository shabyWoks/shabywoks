import React from 'react';

const Badge = (props) => {
  return (
    <div className="qwb-body">
      <img src={props.src} />
      <span>{props.tagName}</span>
    </div>
  )
}

export default Badge;