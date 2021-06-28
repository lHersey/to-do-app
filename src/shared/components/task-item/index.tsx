import React, { FC } from 'react';
import { useCallback } from 'react';

import CheckboxItem from '../checkbox-item';

export type Task = {
  id: string;
  text: string;
  checked: boolean;
};

type Props = {
  task: Task;
  onTap(task: Task): void;
};

const TaskItem: FC<Props> = props => {
  const { task, onTap } = props;

  const handleOnTap = useCallback(() => {
    onTap(task);
  }, [task, onTap]);

  return (
    <CheckboxItem
      onTap={handleOnTap}
      lineThrough={task.checked}
      status={task.checked ? 'checked' : 'unchecked'}
      title={task.text}
    />
  );
};

export default TaskItem;
