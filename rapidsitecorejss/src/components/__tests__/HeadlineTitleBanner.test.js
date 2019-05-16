import React from 'react';
import HeadlineTitleBanner from '../HeadlineTitleBanner/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const tree = renderer
        .create( < HeadlineTitleBanner fields = {
            {
              heading: {
                value: 'Heading',
              },
            }
          }
          />)
          .toJSON(); expect(tree).toMatchSnapshot();
        });