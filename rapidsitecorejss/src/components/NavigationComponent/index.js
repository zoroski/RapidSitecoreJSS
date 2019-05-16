import React from 'react';
import { NavLink } from 'react-router-dom';

// const dropdownLink = (id) => 
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Dropdown
//   </a>;
import logoUrl from '../../assets/sc_logo.png';
const rootUrl = '/';
// const links = [
//   {
//     text: 'Home',
//     url: '/'
//   },
//   {
//     text: 'About us',
//     url: '/about-us-page'
//   },
//   {
//     text: 'Contact us',
//     url: '/contact-us-page'
//   },
//   {
//     text: 'News',
//     url: '/news-page'
//   }
// ];

const NavigationComponent = (props) => {
  const links = props.fields.linkList;
  console.log(links);
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 justify-content-end">
          {
            !links ? null : links.map(link => {
              const isActive = link.fields.url.value === window.location.pathname;
              // const id = link.url + i;

              return (
                <li key={link.fields.text.value} className={'nav-item' + (isActive ? ' active' : '')}
                  // {
                  //   link.list ? ` id="${id}" role="button"
                  //   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`
                  //   : ''
                  // }  
                >
                    <NavLink to={link.fields.url.value} className='nav-link'>
                      {link.fields.text.value}
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
