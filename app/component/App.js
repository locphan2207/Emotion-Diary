import React from 'react';
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator
} from 'react-navigation';

import LogInScreen from './LogInScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';

const AuthNavigator = StackNavigator({
  SignIn: LogInScreen
});

const AppNavigator = DrawerNavigator({
  Home: HomeScreen,
  User: UserScreen
});

const RootNavigator = SwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'App'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
