import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const LogoComponent = (props) => (
  <div>
    <Image field={props.fields.imageFields} />
  </div>
);

export default LogoComponent;
