import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const ThreeColumnsGrid = (props) => (
  <div {...props} className="container" style={{ margin: '30px auto' }}>
    <div className="row">
      <Placeholder
        rendering={props.rendering}
        name="columns"
        renderEach={(component, index) => (
          <div className="col-4 col-sm-6" key={index} style={{ marginTop: '15px' }}>
            {component}
          </div>
        )}
        renderEmpty={(components) => <div className="col-sm-12">{components}</div>}
      />
    </div>
  </div>
);

export default ThreeColumnsGrid;