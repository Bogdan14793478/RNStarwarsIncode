import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 14,
  },
  littleImg: {
    height: 40,
    width: 40,
  },
  box: {
    marginLeft: 5,
    fontSize: 16,
  },
  boxFavoriteView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gold',
    padding: 3,
  },
  fileCharacters: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'gold',
    padding: 3,
    marginHorizontal: 6,
    height: 100,
  },
  likeImg: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
  },
  cardTextContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    position: 'relative',
  },
  cardText: {
    fontFamily: 'Bona Nova',
    fontWeight: '400',
    fontSize: 16,
  },
  openInfo: {
    position: 'absolute',
    right: 20,
  },
  // containerContent: {
  //   alignItems: 'center',
  // },

  // btnContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 24,
  // },
  // btnContainerClose: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   marginVertical: 24,
  //   marginLeft: 16,
  // },
  // leftTouch: {
  //   flex: 1,
  // },
  // rightTouch: {
  //   flex: 1,
  // },
  // text: {
  //   fontFamily: 'Bona Nova',
  //   fontWeight: '400',
  //   fontSize: 16,
  //   color: '#FFFFFF',
  // },
  // textLeft: {
  //   textAlign: 'left',
  //   marginLeft: 16,
  // },
  // textRight: {
  //   textAlign: 'right',
  //   marginRight: 24,
  // },
  // field: {
  //   backgroundColor: '#fff',
  //   width: '100%',

  //   borderRadius: 16,
  //   paddingHorizontal: 24,
  // },

  // fieldRow: {
  //   marginBottom: 3,
  //   marginTop: 24,
  //   // width: '100%',
  //   justifyContent: 'flex-start',
  // },
  // textDark: {
  //   color: '#000',
  //   fontWeight: '700',
  // },
  // inputAuth: {
  //   backgroundColor: '#F2F7FC',
  //   borderRadius: 24,
  //   marginVertical: 10,
  //   padding: 10,
  // },
  // inputPassword: {
  //   flex: 1,
  //   paddingRight: 40,
  // },
  // textDown: {
  //   marginLeft: 16,
  //   fontWeight: '400',
  //   fontSize: 12,
  //   color: '#5E6385',
  // },
  // textBlue: {
  //   color: '#1491EA',
  //   marginLeft: 8,
  // },
  // passwordContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   position: 'relative',
  // },
  // eyeStyle: {
  //   position: 'absolute',
  //   right: 16,
  //   top: 20,
  // },
  // phoneInput: {
  //   paddingHorizontal: 24,
  // },
  // valid: {
  //   borderBottomColor: 'green',
  // },
  // invalid: {
  //   borderBottomColor: 'red',
  // },
});

export default styles;
