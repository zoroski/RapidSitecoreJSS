import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';


const themes = ['primary', 'minor'];

const onThemeToggle = (value, t) => {
  console.log(value, t);
};



const ThemeToggle = (props) => (
  <div>
    <p>Toggle theme</p>
    <input type="radio" name="toggle" onChange={onThemeToggle} />
    <input type="radio" name="toggle" onChange={onThemeToggle} />
    <Text field={props.fields.heading} />
  </div>
);

export default ThemeToggle;
