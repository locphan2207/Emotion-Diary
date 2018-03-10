import React from 'react';
import {View, Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from '../style/styleSheet';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../firebase/firebase';


export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {email: "", password: "", err: []};
  }

  validate() {
    const err = [];
    if (this.state.email === "") err.push("Email cannot be blank");
    if (this.state.password === "") err.push("Password cannot be blank");
    else if (this.state.password.length < 6) {
      err.push("Password needs to have at least 6 characters");
    }
    this.setState({err});

    //Firebase:
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        err.push(error.message);
      });
  }

  renderErrors() {
    if (this.state.err.length > 0) {
      const err = this.state.err;
      return (
        <View>
          {this.state.err.map(error => (<Text style={styles.error}>{error}</Text>))}
        </View>
      );
    }
  }

  static navigationOptions = {
    title: "Sign Up",
    headerTransparent: false
  };

  render() {
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>

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
          onPress={() => {this.validate()}}
          style={styles.button}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <Text
          style={{marginTop: 20, fontStyle: 'italic'}}>
          Already have your account?
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.switchButton}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
