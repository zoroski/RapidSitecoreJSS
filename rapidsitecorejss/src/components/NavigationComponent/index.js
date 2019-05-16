import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

<<<<<<< HEAD
// const dropdownLink = (id) => 
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Dropdown
//   </a>;
import logoUrl from '../../assets/sc_logo.png';
const rootUrl = '/';
const links = [
  {
    text: 'Login',
    url: '/login'
  },
  {
    text: 'Search',
    url: '/search'
  }
];

const NavigationComponent = (props) => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href={rootUrl}>
      <img src={logoUrl} className="logo" alt="logo" />
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
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
=======
const NavigationComponent = (props) => (
  <>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100 justify-content-end">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu float-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
       
            </>
);
>>>>>>> origin/master

export default NavigationComponent;
