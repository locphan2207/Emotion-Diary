import React from 'react';
import HomeScreen from './HomeScreen';
import {StackNavigator} from 'react-navigation';

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}
