import React from 'react';
import { StyleSheet, Text, View,
  Switch,
  Image
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {switchValue: false};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi Tan,</Text>
        <Text>How are you feeling today?</Text>
        <View>
          <Image></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
