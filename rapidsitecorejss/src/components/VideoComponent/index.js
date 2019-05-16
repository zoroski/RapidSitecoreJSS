import React from 'react';
import Iframe from 'react-iframe';

const VideoComponent = (props) => (
  <div className="container embed-responsive embed-responsive-16by9 my-2">
    <Iframe url={`${props.fields.src.value}`}
        width={`${props.fields.width.value}`}
        height={`${props.fields.height.value}`}
        id="myId"
        className="embed-responsive-item"
        frameborder="0"
        allowfullscreen
    />
  </div>
);

export default VideoComponent;
