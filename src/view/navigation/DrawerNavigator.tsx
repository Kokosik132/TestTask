import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyTabs } from './BottomTabRoutes';
import { DrawerView } from '../components';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerView />}>
        <Drawer.Screen name="App" component={MyTabs} />
    </Drawer.Navigator>
  );
}
