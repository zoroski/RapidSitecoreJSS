import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = (props) => {
  const urls = [
                  "http://twitter.com/euromoneyplc", 
                  "http://facebook.com/euromoneyplc",
                  "http://instagram.com/euromoneyplc",
                  "http://linkedin.com/euromoneyplc",
                  "http://pinterest.com/euromoneyplc"
              ];
  const heading = props.fields.heading;
  return (
    <div>
      <p><Text field={props.fields.heading}/></p>
      {
        urls.map( url  => <SocialIcon url={url} fgColor="#fff" /> )
      }
    </div>
  );
}

export default SocialLinks;