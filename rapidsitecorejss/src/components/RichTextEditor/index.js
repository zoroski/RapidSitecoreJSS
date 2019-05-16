import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const RichTextEditor = (props) => {
  //Embedded style only until we have a base theme
  return (
    <div style={{margin:'15px',padding:'15px',border:'1px solid #CCC'}}>
      <RichText field={props.fields.body} />
    </div>
  );
}

export default withSitecoreContext()(RichTextEditor);
