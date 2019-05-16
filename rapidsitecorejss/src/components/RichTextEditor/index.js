import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const RichTextEditor = (props) => {
  //Embedded style only until we have a base theme
  return (
    <div className="container">
    <div style={{padding:'15px',border:'1px solid #CCC'}}>
      <RichText field={props.fields.body} />
    </div>
    </div>
  );
}

export default withSitecoreContext()(RichTextEditor);
