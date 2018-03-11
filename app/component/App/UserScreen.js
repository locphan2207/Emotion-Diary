import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
// import graphUtil from '../../graphUtil/graphUtil';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../style/styleSheet';
import firebase from '../../../firebase/firebase';
import LineGraph from './LineGraph';

export default class UserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emotions: []
    };
  }

  componentDidMount() {
    this.collectData();
  }

  collectData() {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`emotions/${uid}`).once('value').then(snapshot => {
      this.setState({
        emotions: snapshot.val()
      });
    });
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Auth');
    });
  }

  render() {
    console.log(this.state);
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Text>Drawer</Text>
        </TouchableOpacity>
        <LineGraph />
        <TouchableOpacity
          style={styles.logOut}
          onPress={() => this.signOut()}>
          <Text style={{color: 'red'}}>Log Out</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
