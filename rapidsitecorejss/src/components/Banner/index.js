import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const Banner = (props) => (
  <div class="banners row my-2">
    <Image field={props.fields.image} class="col-12 img-fluid banner" />
  </div>
);

export default Banner;
