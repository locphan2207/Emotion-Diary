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

  statusContainer: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 450
  },

  statusInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#DAFFEF',
    borderRadius: 14,
    color: '#5D737E',
    borderColor: '#64B6AC',
    borderWidth: 1,
    padding: 15
  },

  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    width: 120,
    backgroundColor: '#FCFFFD',
    borderRadius: 4,
    borderColor: '#5D737E',
    marginTop: 10,
    borderWidth: 1
  },

  emailInput: {
    fontSize: 15,
    padding: 5,
    borderColor: '#5D737E',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
  }
});

export default styles;
