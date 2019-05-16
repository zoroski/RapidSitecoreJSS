import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FooterLinksComponent = (props) => (
  <footer class="container-fluid py-4 bg-light">
    <p class="copyright col-6"><Text field={props.fields.copyright} /></p>
  </footer>
);

export default FooterLinksComponent;
