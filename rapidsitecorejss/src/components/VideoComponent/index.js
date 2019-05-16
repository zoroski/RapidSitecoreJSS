import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Iframe from 'react-iframe';
import { Container, Col, Row } from 'bootstrap-4-react'

const VideoComponent = (props) => (
  <Container>
    <Row>
      <Text field={props.fields.title} />
    </Row>
    <Row>
      <Iframe url={`${props.fields.src.value}`}
        width={`${props.fields.width.value}`}
        height={`${props.fields.height.value}`}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </Row>
  </Container>
);

export default VideoComponent;
