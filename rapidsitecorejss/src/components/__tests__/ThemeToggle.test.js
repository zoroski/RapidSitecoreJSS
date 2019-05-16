import React from 'react';
import ThemeToggle from '../ThemeToggle/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const tree = renderer
        .create( < ThemeToggle fields = {
            {
              heading: {
                value: 'Heading',
              },
            }
          }
          />)
          .toJSON(); expect(tree).toMatchSnapshot();
        });