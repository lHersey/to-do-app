import React, { FC, useState } from 'react';
import { useCallback } from 'react';
import { ScrollView } from 'react-native';
import TaskItem, { Task } from 'shared/components/task-item';
import shortid from 'shortid';

import { Card, Container, NewTodoInput, Title } from './styles';

const CurrentTasks: FC = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddItem = useCallback(() => {
    const task: Task = {
      id: shortid.generate(),
      checked: false,
      text: value,
    };

    setValue('');
    setTasks(prev => [task, ...prev]);
  }, [value]);

  const handleCheckboxTap = useCallback(
    (task: Task) => {
      const index = tasks.findIndex(x => x.id === task.id);
      const _tasks = [...tasks];
      const _task = { ..._tasks[index] };

      _task.checked = !task.checked;
      _tasks[index] = _task;

      setTasks(_tasks);
    },
    [tasks],
  );

  return (
    <Container>
      <Card>
        <Title>Hello Hersey!</Title>
        <NewTodoInput
          mode="flat"
          label="What do you want to do?"
          onChangeText={setValue}
          value={value}
          right={<NewTodoInput.Icon name="plus" onPress={handleAddItem} />}
        />
        <ScrollView>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onTap={handleCheckboxTap} />
          ))}
        </ScrollView>
      </Card>
    </Container>
  );
};

export default CurrentTasks;
