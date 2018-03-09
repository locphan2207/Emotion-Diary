import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/styleSheet';

export default class UserScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Text>Drawer</Text>
        </TouchableOpacity>
        <Text>User Screen</Text>
        <Text>This screen should show user graphs of emotions</Text>
        <Text>Show how their friends also felt in the past</Text>
      </View>
    );
  }
}
