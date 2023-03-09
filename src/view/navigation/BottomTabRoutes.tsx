import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PostScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {

    return (
        <Tab.Navigator
            screenOptions={() => ({
                gestureEnabled: false,
                headerShown: false,
                tabBarStyle: {
                    height: 100,
                    backgroundColor: 'red',
                    position: "absolute",
                    borderTopWidth: 0,
                    display: "flex",
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'green',
            })}
            >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: '',
                tabBarStyle: {
                    backgroundColor: 'rgba(52, 52, 90, 1)',
                },
            }} />
            <Tab.Screen name="Posts" component={PostScreen} options={{
                tabBarLabel: '',
                tabBarStyle: {
                    backgroundColor: 'rgba(52, 52, 90, 1)',
                },
            }} />
        </Tab.Navigator>
    );
};