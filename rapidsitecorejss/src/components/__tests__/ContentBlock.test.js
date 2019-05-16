import React from 'react';
import ContentBlock from '../ContentBlock/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const tree = renderer
        .create( < ContentBlock fields = {
            {
              heading: {
                value: 'Take note: Even the Reserve Bank of Australia needs sub-editors',
              },
              content: {
                value: 'Central banks have a lot to do, so it’s no surprise things get overlooked once in a while.',
              },
            }
          }
          />)
          .toJSON(); expect(tree).toMatchSnapshot();
        });