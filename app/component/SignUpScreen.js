import React from 'react';
import {View, Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from '../style/styleSheet';
import LinearGradient from 'react-native-linear-gradient';

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {email: "", password: ""};
  }

  static navigationOptions = {
    title: "Sign Up",
    headerTransparent: true
  };

  render() {
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>

        <TextInput
          style={styles.emailInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#5D737E"
        />
        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"
          placeholderTextColor="#5D737E"
        />
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have your account?</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
