import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import CurrentTasks from 'screens/current-tasks';
import { Screens } from 'shared/constants/screens';

const Stack = createStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.CURRENT_TASKS} headerMode="none">
        <Stack.Screen name={Screens.CURRENT_TASKS} component={CurrentTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
