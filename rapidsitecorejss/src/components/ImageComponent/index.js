import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const ImageComponent = (props) => (
  <div class="banners row my-2">
    <Image field={props.fields.imageFields} class="col-12 img-fluid banner" />
  </div>
);

export default ImageComponent;
