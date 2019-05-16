import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BreadcrumpComponent = (props) => (
  <div>
    <p>BreadcrumpComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default BreadcrumpComponent;
