import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const LogoComponent = (props) => (
  <a class="navbar-brand" href="#">  <Image field={props.fields.imageFields} className="logo img img-responsive" /> </a>
);

export default LogoComponent;
