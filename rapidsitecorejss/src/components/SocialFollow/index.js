import React from './node_modules/react';
// import ReactDOM from 'react-dom';
import { Text } from './node_modules/@sitecore-jss/sitecore-jss-react';
// import { SocialIcon } from 'react-social-icons';

const SocialFollow = (props) => (
  <div>
    <p>Follow us!</p>
    <Text field={props.fields.heading} />
    {/* <SocialIcon url="http://twitter.com/jaketrent" /> */}
  </div>
);

export default SocialFollow;
