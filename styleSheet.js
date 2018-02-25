import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoContainer: {
    flex: 1/8,  // planing to divide container to 8 parts, then this one takes 1 part
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 300
  },
  emoji: {
    width: 40,
    height: 40
  },

  prompt1: {
    position: 'absolute',
    top: 130,
    left: 50,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 30
  },
  prompt2: {
    position: 'absolute',
    top: 300,
    left: '20%',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 20
  }
});

export default styles;
