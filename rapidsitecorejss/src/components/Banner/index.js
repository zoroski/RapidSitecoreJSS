import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const Banner = (props) => (
  <div className="banners row my-2">
    <Image field={props.fields.image} className="col-12 img-fluid banner" />
  </div>
);

export default Banner;
