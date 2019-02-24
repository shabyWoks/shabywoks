import React from 'react';

const ImageComp = (props) => {
  return (
    <div className="img-holder">
      <img src = {props.src} />
    </div>
  )
}

export default ImageComp;