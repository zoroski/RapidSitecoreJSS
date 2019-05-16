import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Iframe from 'react-iframe';

const VideoComponent = (props) => (
  <div class="container embed-responsive embed-responsive-16by9 my-2">
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
