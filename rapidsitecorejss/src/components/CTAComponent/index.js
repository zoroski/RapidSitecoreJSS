import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const pStyle = {
  padding: '15px',
};

const CTAComponent = (props) => (
  <div className="widget green message padding-small bg-success text-white"> 
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5" style={pStyle}>
          <h4 className="light"><img src="images/bird.svg" alt="" className="bird-svg" /> Get your Super Early Bird tickets now!</h4>
        </div>
        <div className="col-md-7 text-right" style={pStyle}>
          <a href={`${props.fields.link.value}`} target="_blank"  className="btn btn-primary">
            <Text field={props.fields.heading} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CTAComponent;
