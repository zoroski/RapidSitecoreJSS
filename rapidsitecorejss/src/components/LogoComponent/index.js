import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const sStyle = {
  width: '200px',
  height: '100px',

};

const LogoComponent = (props) => (
  <a className="navbar-brand"  href="/">
    <Image field={props.fields.imageFields} style={sStyle} />
  </a>
);

export default LogoComponent;
