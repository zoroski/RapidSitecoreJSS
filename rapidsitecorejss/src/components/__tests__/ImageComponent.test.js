import React from 'react';
import ImageComponent from '../ImageComponent/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const tree = renderer
        .create( < ImageComponent fields = {
            {
              title: {
                value: 'Title',
              },
              imageFields: {
                value: {
                  src: '/media/image.png'
                },
              },
            }
          }
          />)
          .toJSON(); expect(tree).toMatchSnapshot();
        });