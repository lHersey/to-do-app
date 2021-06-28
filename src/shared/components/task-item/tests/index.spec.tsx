import { fireEvent, render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseTaskItem from '../index';

const TaskItem: FC<ComponentProps<typeof BaseTaskItem>> = props => {
  return (
    <Providers>
      <BaseTaskItem {...props} />
    </Providers>
  );
};

describe('<TaskItem />', () => {
  describe('snapshots', () => {
    it('should match snapshot with checked', () => {
      expect.hasAssertions();
      const task = { checked: true, id: '1', text: 'Test' };
      const rendered = render(<TaskItem onTap={jest.fn()} task={task} />).toJSON();

      expect(rendered).toMatchSnapshot();
    });

    it('should match snapshot with unchecked', () => {
      expect.hasAssertions();
      const task = { checked: false, id: '1', text: 'Test' };
      const rendered = render(<TaskItem onTap={jest.fn()} task={task} />).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should pass the current task on tap', () => {
      expect.hasAssertions();

      const handleOnTap = jest.fn();
      const task = { id: '1', text: 'Text', checked: true };

      const { container } = render(<TaskItem task={task} onTap={handleOnTap} />);

      fireEvent.press(container);

      expect(handleOnTap).toHaveBeenCalledWith(task);
    });
  });

  it('should have unit tests specified', () => {
    expect.hasAssertions();
    expect(true).toStrictEqual(false);
  });
});
