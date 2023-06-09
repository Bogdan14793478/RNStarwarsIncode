import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    // position: 'relative',
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
    position: 'relative',
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
  clearBtn: {
    position: 'relative',
    alignItems: 'flex-end',
    margin: 6,
  },
  searchInput: {
    margin: 3,
    padding: 6,
    borderBottomColor: 'blue',
    borderWidth: 2,
  },
});

export default styles;
