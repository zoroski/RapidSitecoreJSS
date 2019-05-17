import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = (props) => {
  const urls = props.fields.urlList;
  console.log(urls);
  const heading = props.fields.heading;

  return (
    <div>
      <p><Text field={heading}/></p>
      {
        urls.map( (link, index)  => <SocialIcon url={link.fields.url.value} fgColor="#fff" key={index}/> )
      }
    </div>
  );
}

export default SocialLinks;