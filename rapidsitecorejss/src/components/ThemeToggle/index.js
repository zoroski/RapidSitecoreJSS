import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react'

const themes = ['primary', 'minor'];

const ThemeToggle = (props) => {
  const { sitecoreContext } = props;

  // actually it's bad, temporary & doesn't work as u expect. Need to extend context setter to update the app after updating the context
  if (!sitecoreContext.theme) {
    sitecoreContext.theme = themes[0];
  }

  const change = (newTheme) => {
    console.log(sitecoreContext.theme, newTheme)
    sitecoreContext.theme = newTheme;
  };

  return (
    <div>
      <p>Current theme: {sitecoreContext.theme}</p>
      {
        themes.map(theme => 
          <label key={theme} style={{ marginRight: '10px '}}>
            {theme}
            <input type="radio" name="theme" value={theme} checked={theme === sitecoreContext.theme} onChange={() => change(theme)} style={{ marginLeft: '5px' }} />
          </label>
        )
      }
    </div>
  )
};

export default withSitecoreContext()(ThemeToggle);
