import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Iframe from 'react-iframe';

const VideoComponent = (props) => (
  <div>
    <div>
      <Text field={props.fields.title} />
    </div>
    <div>
      <Iframe url={`${props.fields.src.value}`}
        width={`${props.fields.width.value}`}
        height={`${props.fields.height.value}`}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  </div>
);

export default VideoComponent;
