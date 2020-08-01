import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomModalContent: {
    backgroundColor: 'white',
    height: '50%',
    paddingTop: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  postHeaderText: {
    marginLeft: 10,
  },
  postHeaderTitle: {
    color: '#2d2d2d',
  },
  postHeaderSubtitle: {
    color: '#2d2d2d',
    fontSize: 10,
  },
  postComment: {
    color: '#2d2d2d',
    fontSize: 12,
    flexWrap: 'wrap',
    maxWidth: '92%',
    marginTop: 5,
  },
  postContent: {
    marginTop: 20,
    marginRight: 20,
    maxWidth: '60%',
  },
  buttom: {
    marginRight: 10,
    marginTop: 20,
  },
});

export default styles;
