import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const LogoComponent = (props) => (
  <a className="navbar-brand" href="/">
    <Image field={props.fields.imageFields} className="logo img img-responsive" />
  </a>
);

export default LogoComponent;
