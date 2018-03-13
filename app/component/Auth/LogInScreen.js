import React from 'react';
import {View, Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from '../../style/styleSheet';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../../firebase/firebase';
import demoCredential from '../../../secret/demoCredential';

export default class LogInScreen extends React.Component {
  constructor() {
    super();
    this.state = {email: "", password: "", err: []};
  }

  static navigationOptions() {
    return {
      title: "Log In",
      headerTransparent: true
    };
  }

  validate() {
    //Check if error
    const err = [];
    if (this.state.email === "") err.push("Email cannot be blank");
    if (this.state.password === "") err.push("Password cannot be blank");
    if (err.length > 1) this.setState({err});

    //Firebase:
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // const id = firebase.auth().currentUser.uid;
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        err.push(error.message);
        this.setState({err});
      });
  }

  demoLogin() {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(demoCredential.email,
      demoCredential.password)
      .then(() => {
        // const id = firebase.auth().currentUser.uid;
        this.props.navigation.navigate('Home');
      });
  }

  renderErrors() {
    if (this.state.err.length > 0) {
      const err = this.state.err;
      return (
        <View style={styles.errorView}>
          {this.state.err.map((error, idx) => (<Text key={idx} style={styles.error}>{error}</Text>))}
        </View>
      );
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>

        <View style={styles.authContainer}>
          {this.renderErrors()}
          <TextInput
            style={styles.authInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#5D737E"
          />
          <TextInput
            style={styles.authInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#5D737E"
          />
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.button}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <Text
            style={{marginTop: 25, fontStyle: 'italic'}}>
            Do not have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}>
            <Text style={styles.switchButton}>Sign up!</Text>
          </TouchableOpacity>

          <Text
            style={{marginTop: 20, fontStyle: 'italic'}}>
            If you are a recruiter...
          </Text>
          <TouchableOpacity
            onPress={() => this.demoLogin()}>
            <Text style={styles.demo}>Demo LogIn</Text>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    );
  }
}
