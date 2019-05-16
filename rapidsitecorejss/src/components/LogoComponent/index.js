import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const LogoComponent = (props) => (
  <a class="navbar-brand" href="/">
    <Image field={props.fields.imageFields} class="logo img img-responsive" />
  </a>
);

export default LogoComponent;
