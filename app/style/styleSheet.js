import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  innerContainer: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'green'
  },

  menu: {
    height: 90,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // backgroundColor: 'red'
  },

  menuIcon: {
    width: 30,
    height: 30
  },
  authContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoContainer: {
    // flex: 1/8,  // planing to divide container to 8 parts, then this one takes 1 part
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '80%',
    marginTop: 50
  },

  emoji: {
    width: 40,
    height: 40
  },

  prompt1: {
    width: '80%',
    marginTop: 70,
    // backgroundColor: 'yellow',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 30
  },
  prompt2: {
    marginTop: 50,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 22
  },

  statusContainer: {
    width: '80%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20
    // backgroundColor: 'green'
  },

  statusInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#DAFFEF',
    borderRadius: 14,
    color: '#5D737E',
    borderColor: '#64B6AC',
    borderWidth: 1.1,
    padding: 15
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    backgroundColor: '#FCFFFD',
    borderRadius: 4,
    borderColor: '#5D737E',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1.1
  },

  authInput: {
    width: '60%',
    height: 40,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#5D737E',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },

  switchButton: {
    fontWeight: '600',
    fontSize: 16,
    color: '#b63c42',
  },

  demo: {
    fontFamily: 'Avenir-Heavy',
    textDecorationLine: 'underline',
    fontWeight: '800',
    fontSize: 16,
    color: '#475841',

  },

  errorView :{
    marginBottom: 20,
    width: '80%',
    paddingLeft: 40
  },

  error: {
    fontSize: 13,
    color: '#b63c42',
    paddingBottom: 7
  },

  graphContainer: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logOut: {
    height: 50,
    justifyContent: 'center'
  },

  chartContainer: {
    width: '100%',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },

  chartFilter: {
    height: 70,
    width: '65%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  chartOption: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default styles;
