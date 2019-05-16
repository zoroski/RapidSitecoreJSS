import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const LogoComponent = (props) => (
  <a className="navbar-brand">
    <Image field={props.fields.imageFields} />
  </a>
);

export default LogoComponent;
