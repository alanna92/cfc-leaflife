import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  extendedToolbar: {
    backgroundColor: '#388E3C',
    height: 250,
    alignItems: 'center',
    paddingTop: 10,
  },
  avatar: {
    width: 102,
    height: 102,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 24,
    marginTop: 5,
  },
  indicatorsContent: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 35,
  },
  indicator: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
