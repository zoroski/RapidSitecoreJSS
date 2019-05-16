import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BreadcrumpComponent = (props) => (
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
  </nav>
  
);

export default BreadcrumpComponent;
