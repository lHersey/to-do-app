import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import CurrentTasks from 'screens/current-tasks';
import LocalAuthCheck from 'screens/local-auth-check';
import { Screens } from 'shared/constants/screens';

const Stack = createStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.AUTH} headerMode="none">
        <Stack.Screen name={Screens.AUTH} component={LocalAuthCheck} />
        <Stack.Screen name={Screens.CURRENT_TASKS} component={CurrentTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
