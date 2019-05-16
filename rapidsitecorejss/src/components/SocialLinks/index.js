import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = (props) => {
  const urls = props.fields.urlList;
  const heading = props.fields.heading;

  return (
    <div>
      <p><Text field={props.fields.heading}/></p>
      {
        urls.map( link  => <SocialIcon url={link.fields.url.value} /> )
      }
    </div>
  );
}

export default SocialLinks;