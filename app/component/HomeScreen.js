import React from 'react';
import { Text, View, Button,
  TouchableOpacity,
  Switch,
  Image,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style/styleSheet';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "", status: false};
  }

  handleEmoPress(e) {
    e.target.styles={width: 60, height: 60};
    this.setState({status: true});
  }

  renderStatus() {
    console.log("check");
    if (this.state.status) {
      return (
        <View style={styles.statusContainer}>
          <TextInput
            style={styles.statusInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Tell us about your day..."
            placeholderTextColor="#5D737E"
          />
          <TouchableOpacity
            style={styles.button}>
            <Text style={{color: '#5D737E'}}>Save to Diary</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <LinearGradient
        colors={['#C0FDFB', '#FCFFFD']}
        style={styles.container}>
        <Text style={styles.prompt1}>Hi Tan,</Text>
        <Text style={styles.prompt2}>How are you feeling today?</Text>
        <View style={styles.emoContainer}>
          <TouchableOpacity onPress={(e) => this.handleEmoPress(e)}>
            <Image source={require('../../images/assets/icons8-crying.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-sad.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-neutral_emoticon.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-happy.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-lol.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-smiling_face_with_heart.png')}
              style={styles.emoji} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({status: true})}>
            <Image source={require('../../images/assets/icons8-in_love.png')}
              style={styles.emoji} />
          </TouchableOpacity>
        </View>
        {this.renderStatus()}
      </LinearGradient>
    );
  }
}
