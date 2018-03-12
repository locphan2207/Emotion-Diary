import React from 'react';
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator
} from 'react-navigation';

import firebase from '../../firebase/firebase';

import LogInScreen from './Auth/LogInScreen';
import SignUpScreen from './Auth/SignUpScreen';
import AuthLoadingScreen from './Auth/AuthLoadingScreen';
import HomeScreen from './App/HomeScreen';
import UserScreen from './App/UserScreen';
import VictoryScreen from './App/VictoryScreen';

const AuthNavigator = StackNavigator({
  SignIn: LogInScreen,
  SignUp: SignUpScreen
});

const AppNavigator = DrawerNavigator({
  User: UserScreen,
  Victory: VictoryScreen,
  Home: HomeScreen,
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
