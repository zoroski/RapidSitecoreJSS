import React from 'react';
import { NavLink } from 'react-router-dom';

// const dropdownLink = (id) => 
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Dropdown
//   </a>;
import logoUrl from '../../assets/sc_logo.png';
const rootUrl = '/';

const sStyle = {
 color:"white"

};

const NavigationComponent = (props) => {
  const links = props.fields.linkList;
  console.log(links);
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 justify-content-end" >
          {
            !links ? null : links.map(link => {
              return (
                <li key={link.fields.text.value}  className='nav-item'
                >
                    <NavLink to={link.fields.url.value} style={sStyle} className='nav-link'>
                      {link.fields.text.value}
                      <span className="sr-only">(current)</span>
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
