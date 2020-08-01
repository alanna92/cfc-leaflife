import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    margin: 14,
    paddingBottom: 14,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  postContent: {
    marginTop: 20,
    marginRight: 20
  },
  postImage: {
    maxWidth: '100%',
    alignSelf: 'center'
  },
  postComment: {
    color: '#2d2d2d',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    margin: 14,
  }
});

export default styles;
