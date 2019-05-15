import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const RichTextEditor = (props) => (
  <div>
    <p>RichTextEditor Component</p>
    <Text field={props.fields.heading} />
    <Text field={props.fields.body} />
  </div>
);

export default RichTextEditor;
