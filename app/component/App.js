import React from 'react';
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator
} from 'react-navigation';

import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';

const AuthNavigator = StackNavigator({
  SignIn: LogInScreen,
  SignUp: SignUpScreen
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
    initialRouteName: 'Auth'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
