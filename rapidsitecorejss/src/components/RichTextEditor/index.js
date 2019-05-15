import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const RichTextEditor = (props) => {
  const [text, textChanged] = useState('');
  console.log(props);

  //Embedded style only until we have a base theme
  return (
    <div style={{margin:'15px',padding:'15px',border:'1px solid #CCC'}}>
      <p><Text field={props.fields.heading} /></p>
      <Text field={props.fields.body} />
      <ReactQuill 
        style={{margin:'15px'}} 
        value={text} 
        onChange={textChanged} />
    </div>
  );
}

export default withSitecoreContext()(RichTextEditor);
