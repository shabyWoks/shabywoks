import React from 'react';

const Tag = (props) => {
  return (
    <div className="tg-body">
      <span>{props.tagName}</span>
      { !props.closeable ? <span onclick= { props.close(props.id) }>X</span> : <span></span> }
    </div>
  )
}

export default Tag;