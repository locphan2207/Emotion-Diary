import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/styleSheet';
import firebase from '../../firebase/firebase';

export default class UserScreen extends React.Component {

  signOut() {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Auth');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Text>Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.signOut()}>
          <Text style={{color: 'red'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
