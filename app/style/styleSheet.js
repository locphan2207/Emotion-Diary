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
    width: '80%',
    position: 'absolute',
    top: 350,
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
    top: 280,
    left: '18%',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 22
  },
  statusInput: {
    width: '80%',
    height: 100,
    backgroundColor: '#DAFFEF',
    position: 'absolute',
    top: 450,
    borderRadius: 14,
    color: '#5D737E',
    padding: 15,
    borderColor: '#64B6AC',
    borderWidth: 1
  },

  button: {
    padding: 10,
    backgroundColor: '#FCFFFD',
    position: 'absolute',
    top: 570,
    borderRadius: 4,
    borderColor: '#5D737E',
    borderWidth: 1
  }
});

export default styles;
