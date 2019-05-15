import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = (props) => {
  const [text, textChanged] = useState('');

  //Embedded style only until we have a base theme
  return (
    <div style={{margin:'15px',padding:'15px',border:'1px solid #CCC'}}>
      <p>RichTextEditor Component</p>
      <Text field={props.fields.heading} />
      <Text field={props.fields.body} />
      <ReactQuill 
        style={{margin:'15px'}} 
        value={text} 
        onChange={textChanged} />
    </div>
  );
}

export default RichTextEditor;
