import React from 'react';
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator
} from 'react-navigation';

import firebase from '../../firebase/firebase';

import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

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
    AuthLoader: AuthLoadingScreen,
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'AuthLoader'
  }
);

export default class App extends React.Component {
  render() {
    console.log(firebase.auth().currentUser);
    return (
      <RootNavigator />
    );
  }
}
