import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const ImageComponent = (props) => (
  <div>
    <div>
      <Text field={props.fields.title} />
    </div>
    <div>
      <Image field={props.fields.imageFields} />
    </div>
  </div>
);

export default ImageComponent;
