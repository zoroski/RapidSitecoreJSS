import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { Container, Col, Row } from 'bootstrap-4-react'

const ImageComponent = (props) => (
  <Container>
    <Row>
      <Text field={props.fields.title} />
    </Row>
    <Row>
      <Image field={props.fields.imageFields} />
    </Row>
  </Container>
);

export default ImageComponent;
