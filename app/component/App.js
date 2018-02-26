import React from 'react';
import { Text, View,
  Switch,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style/styleSheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {switchValue: false};
  }

  render() {
    return (
      <LinearGradient colors={['#C0FDFB', '#FCFFFD']} style={styles.container}>
        <Text style={styles.prompt1}>Hi Tan,</Text>
        <Text style={styles.prompt2}>How are you feeling today?</Text>
        <View style={styles.emoContainer}>
          <Image source={require('../../images/assets/icons8-crying.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-sad.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-neutral_emoticon.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-happy.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-lol.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-smiling_face_with_heart.png')}
            style={styles.emoji}
          />
          <Image source={require('../../images/assets/icons8-in_love.png')}
            style={styles.emoji}
          />
        </View>
      </LinearGradient>
    );
  }
}
