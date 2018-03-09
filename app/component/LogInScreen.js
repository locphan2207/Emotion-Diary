import React from 'react';
import {View, Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from '../style/styleSheet';
import LinearGradient from 'react-native-linear-gradient';

export default class LogInScreen extends React.Component {
  constructor() {
    super();
    this.state = {email: "", password: ""};
  }

  static navigationOptions = {
    title: "Log In",
    headerTransparent: true
  };

  render() {
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>
        <TextInput
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
          <Text>Log In</Text>
        </TouchableOpacity>
        <Text>Do not have an account?</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}>
          <Text>Sign up!</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
