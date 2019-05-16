import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FooterLinksComponent = (props) => (
  <footer className="container-fluid py-4 bg-light">
    <p className="copyright col-6"><Text field={props.fields.copyright} /></p>
  </footer>
);

export default FooterLinksComponent;
