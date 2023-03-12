import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MyDrawer } from './DrawerNavigator';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AppStack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen name="Drawer" component={MyDrawer} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
