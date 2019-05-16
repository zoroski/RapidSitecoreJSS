import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FooterLinksComponent = (props) => (
  <div>
    <p>FooterLinksComponent Component</p>
    <Text field={props.fields.copyright} />
  </div>
);

export default FooterLinksComponent;
