import React from 'react';
import VideoComponent from '../VideoComponent/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const tree = renderer
        .create( < VideoComponent fields = {
            {
              title: {
                value: 'Title',
              },
              src: {
                value: 'https://youtu.be/IeLqT75N8V0',
              },
              width: {
                value: '640',
              },
              height: {
                value: '360',
              },
            }
          }
          />)
          .toJSON(); expect(tree).toMatchSnapshot();
        });