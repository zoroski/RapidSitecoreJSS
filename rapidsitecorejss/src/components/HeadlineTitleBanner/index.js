import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeadlineTitleBanner = ({fields}) => (
  <div className="container">
    <Text tag="h2" className="display-4" field={fields.heading} />
  </div>
);

export default HeadlineTitleBanner;
