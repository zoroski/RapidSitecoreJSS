import React from 'react';
import { NavLink } from 'react-router-dom';

// const dropdownLink = (id) => 
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Dropdown
//   </a>;

const links = [
  {
    text: 'Home',
    url: '/login'
  },
  {
    text: 'Calendar',
    url: '/calendar'
  },
  {
    text: 'About us',
    url: '/about'
  }
];

const NavigationComponent = (props) => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 justify-content-end">
          {
            !links ? null : links.map(link => {
              const isActive = link.url === window.location.pathname;
              // const id = link.url + i;

              return (
                <li key={link.text} className={'nav-item' + (isActive ? ' active' : '') + (link.list ? ' dropdown' : '')}
                  // {
                  //   link.list ? ` id="${id}" role="button"
                  //   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`
                  //   : ''
                  // }  
                >
                    <NavLink to={link.url} className={'nav-link' + (link.isDisabled ? ' disabled' : '')}>
                      {link.text}
                      {isActive ? <span className="sr-only">(current)</span> : null}
                    </NavLink>
                    {/* {
                      link.list ? 
                        <div className="dropdown-menu float-right" aria-labelledby="{}">
                          {
                            link.list.map(subLink =>
                              <a className="dropdown-item" href={subLink.url}>{subLink.text}</a>
                            )
                          }
                        </div>
                        : null
                    } */}
                </li>
              );
            })
          }
        </ul>
    </div>
  </nav>
)
};

export default NavigationComponent;
