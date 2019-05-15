import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeadlineTitleBanner = (props) => (
  <div>
    <p>HeadlineTitleBanner Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HeadlineTitleBanner;
