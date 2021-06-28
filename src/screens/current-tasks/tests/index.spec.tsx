import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseCurrentTasks from '../index';

const CurrentTasks: FC<ComponentProps<typeof BaseCurrentTasks>> = props => {
  return (
    <Providers>
      <BaseCurrentTasks {...props} />
    </Providers>
  );
};

describe('<CurrentTasks />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<CurrentTasks />).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(<CurrentTasks />);

      expect(queryByText('Hello CurrentTasks')).toBeTruthy();
    });
  });

  it('should have unit tests specified', () => {
    expect.hasAssertions();
    expect(true).toStrictEqual(false);
  });
});
