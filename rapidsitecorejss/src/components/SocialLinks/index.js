import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = (props) => (
  <div>
    <p>Follow us!</p>
    <Text field={props.fields.heading} />
    <SocialIcon url="http://twitter.com/jaketrent" />
  </div>
);

export default SocialLinks;