import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120,
  },
  input: {
    position: 'absolute',
    width: '95%',
    top: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  infoFab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: 'white',
  },
  infoMyLocation: {
    position: 'absolute',
    margin: 16,
    right: 8,
    bottom: 65,
    backgroundColor: 'white',
  },
});

export default styles;
