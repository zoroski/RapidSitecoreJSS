import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/" className="text-dark">

      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      <NavLink to="/styleguide" className="p-2 text-dark">
        Styleguide
      </NavLink>
      <NavLink to="/graphql" className="p-2 text-dark">
        Documentation
      </NavLink>
    </nav>
  </div>
);

export default NavigationComponent;
