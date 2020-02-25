import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from "../constants/Colors";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-train"
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-at" />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
},
{
  tabBarOptions: {
      showLabel: true,
      activeTintColor: Colors.lightBlue,
      inactiveTintColor: "white",
      style: {
          backgroundColor: Colors.darkBlue
      }
  }
});

tabNavigator.path = '';

export default tabNavigator;
