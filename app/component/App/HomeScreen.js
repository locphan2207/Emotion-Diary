import React from 'react';
import { Text, View, Button,
  TouchableOpacity,
  Switch,
  Image,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import styles from '../../style/styleSheet';
import firebase from '../../../firebase/firebase';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      status: false,
      firstName: "",
      uid: "",
      emotion: null
    };
  }

  componentDidMount() {
    // Get current user firstname
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/users/${uid}`)
      .once('value').then(snapshot => {
        this.setState({
          firstName: snapshot.val().firstName,
          uid
        });
      });
  }

  handleEmoPress(targetRef) {
    // targetRef is emoticon ref, so I can call setNativeProps to change size:
    // loop through all emoticons, if it is targetRef, increase size
    // if not, reduce size back to normal
    Object.keys(this.refs).forEach(ref => {
      if (ref === targetRef) {
        this.refs[ref].setNativeProps({style: {width: 60, height: 60}});
      } else {
        this.refs[ref].setNativeProps({style: {width: 40, height: 40}});
      }
    });
    this.setState({emotion: parseInt(targetRef)});
  }

  renderStatus() {
    if (this.state.emotion === null) return null;
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
          onPress={() => this.saveToDiary()}
          style={styles.button}>
          <Text style={{color: '#5D737E'}}>Save to Diary</Text>
        </TouchableOpacity>
      </View>
    );
  }

  saveToDiary() {
    const time = moment().unix(); // current time in unix number

    firebase.database().ref(`/emotions/${this.state.uid}/${time}`)
      .set({
        time,
        emotion: this.state.emotion,
        text: this.state.text
      });

    this.props.navigation.navigate('User');
  }

  render() {
    const assetPath = '../../../images/assets';
    if (this.state.firstName === "") return null;
    return (
      <LinearGradient
        colors={['#C0FDFB', '#FCFFFD']}
        style={styles.container}>

        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Image source={require(`${assetPath}/icons8-menu-48.png`)}
              style={styles.menuIcon} />
          </TouchableOpacity>

          <Text style={styles.prompt1}>Hi {this.state.firstName},</Text>
          <Text style={styles.prompt2}>How are you feeling today?</Text>

          <View style={styles.emoContainer}>
            <TouchableOpacity
              onPress={() => this.handleEmoPress("-2")}>
              <Image source={require(`${assetPath}/icons8-crying.png`)}
                ref="-2"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("-1")}>
              <Image source={require(`${assetPath}/icons8-sad.png`)}
                ref="-1"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("0")}>
              <Image source={require(`${assetPath}/icons8-neutral_emoticon.png`)}
                ref="0"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("1")}>
              <Image source={require(`${assetPath}/icons8-happy.png`)}
                ref="1"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("2")}>
              <Image source={require(`${assetPath}/icons8-lol.png`)}
                ref="2"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("3")}>
              <Image source={require(`${assetPath}/icons8-smiling_face_with_heart.png`)}
                ref="3"
                style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleEmoPress("4")}>
              <Image source={require(`${assetPath}/icons8-in_love.png`)}
                ref="4"
                style={styles.emoji} />
            </TouchableOpacity>
          </View>

          {this.renderStatus()}

        </View>
      </LinearGradient>
    );
  }
}
