import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const CTAComponent = (props) => (
  <a href={`${props.fields.link.value}`} target="_blank" className="btn btn-primary">
    <Text field={props.fields.heading} />
  </a>
);

export default CTAComponent;
