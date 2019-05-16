import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FooterLinksComponent = (props) => (
<>
<br/>
    <p className="copyright text-white"><Text field={props.fields.copyright} /></p>
</>
  
);

export default FooterLinksComponent;
