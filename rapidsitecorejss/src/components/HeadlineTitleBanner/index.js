import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeadlineTitleBanner = ({fields}) => (
  <div class="my-4 text-center">
    <Text tag="h2" className="display-4" field={fields.heading} />
  </div>
);

export default HeadlineTitleBanner;
