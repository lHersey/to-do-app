import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseText from '../index';

const Text: FC<ComponentProps<typeof BaseText>> = props => {
  return (
    <Providers>
      <BaseText {...props} />
    </Providers>
  );
};

describe('<Text />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<Text>This is a text</Text>).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const text = 'Hello text';
      const { queryByText } = render(<Text>{text}</Text>);

      expect(queryByText(text)).toBeTruthy();
    });
  });
});
