import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "../screens/HomeScreen";
import FormOne from "../screens/FormOne";
import FormTwo from "../screens/FormTwo";
import FormThree from "../screens/FormThree";
import Recommendation from "../screens/Recommendation";

const stackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  FormOne: { screen: FormOne, navigationOptions: { header: null } },
  FormTwo: { screen: FormTwo, navigationOptions: { header: null } },
  FormThree: { screen: FormThree, navigationOptions: { header: null } },
  Recommendation: { screen: Recommendation, navigationOptions: { header: null } }
});

export default createAppContainer(stackNavigator);

// import MainTabNavigator from './MainTabNavigator';

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// );
