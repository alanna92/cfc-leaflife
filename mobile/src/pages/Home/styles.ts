import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    margin: 14,
    paddingBottom: 14,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  postImage: {
    maxWidth: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginTop: 10,
  },
  iconCount: {
    marginRight: 30,
    marginLeft: 5,
    fontSize: 10,
    color: '#2d2d2d',
  },
});

export default styles;
