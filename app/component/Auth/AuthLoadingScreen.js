import React from 'react';
import {
  View, Text,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import styles from '../../style/styleSheet';
import firebase from '../../../firebase/firebase';

import * as admin from '../../../secret/adminCredential';
import demoCredential from '../../../secret/demoCredential';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapWait();
  }

  _bootstrapWait() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (user.uid === demoCredential.uid) {// if guest is logging in
          admin.deleteAndReSeedDemoData();  // we re-seed data
        }
        this.props.navigation.navigate('App');
      } else this.props.navigation.navigate('Auth');
    });
  }

  render() {
    // this._bootstrapWait();
    return (
      <View style={styles.container}>
        <Text>Loading current user...</Text>
        <ActivityIndicator size="large" color="#5D737E"/>
        <StatusBar barStyle='default' />
      </View>
    );
  }
}
