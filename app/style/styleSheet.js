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
    alignItems: 'center',
    padding: 10,
    width: 120,
    backgroundColor: '#FCFFFD',
    borderRadius: 4,
    borderColor: '#5D737E',
    marginTop: 10,
    borderWidth: 1
  },

  authInput: {
    width: '60%',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#5D737E',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },

  switchButton: {
    fontWeight: '600',
    fontSize: 16,
    color: '#b63c42'
  },

  errorView :{
    position: 'absolute',
    bottom: 500
  },

  error: {
    fontSize: 13,
    color: '#b63c42',
    paddingBottom: 7
  }
});

export default styles;
