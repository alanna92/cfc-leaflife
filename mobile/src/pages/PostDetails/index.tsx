import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Comment from '../../models/Comment';

const PostDetails: React.FC = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>('');
  const navigation = useNavigation();

  React.useEffect(() => {
    setComments([
      {
        id: 1,
        owner: 'Karina Rodriguez',
        text: 'Awesome!! Good job!',
        commentTime: '07/28/2020 - 10:00Manaus, AM - Brazil',
        postId: 1,
      },
      {
        id: 2,
        owner: 'Karina Rodriguez',
        text: 'Awesome!! Good job!',
        commentTime: '07/28/2020 - 10:00Manaus, AM - Brazil',
        postId: 1,
      },
    ]);
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image source={require('../../../assets/profile/profile1.png')} />
        <Appbar.Content
          title={post ? post.name : ''}
          subtitle={
            post
              ? `Planted a ${post.plantSpecies} at ${post.postLocation} (
            ${post.postTime})`
              : ''
          }
        />
      </Appbar.Header>
      <ScrollView>
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.postComment}>{post.comment}</Text>
          <Image
            style={styles.postImage}
            source={require('../../../assets/posts/post1.png')}
          />
          <View style={styles.rowBottomAlign}>
            <TouchableOpacity
              style={styles.rowBottomAlign}
              onPress={() => handleShowPostDetails(post)}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/liked.png')}
              />
              <Text style={styles.iconCount}>{post.likeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowBottomAlign}
              onPress={() => handleShowPostDetails(post)}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/comment.png')}
              />
              <Text style={styles.iconCount}>{post.commentsCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {comments.map(comment => (
          <View key={comment.id} style={styles.postContainer}>
            <View style={styles.rowTopAlign}>
              <Image source={require('../../../assets/profile/profile2.png')} />
              <View style={styles.postHeaderText}>
                <Text style={styles.postHeaderTitle}>{comment.owner}</Text>
                <Text style={styles.comment}>{comment.text}</Text>
                <Text style={styles.postHeaderSubtitle}>
                  {comment.commentTime}
                </Text>
              </View>
            </View>
          </View>
        ))}
        <KeyboardAvoidingView behavior="position" style={styles.form}>
          <TextInput
            style={styles.input}
            label="Add Your Comment"
            mode="outlined"
            value={comment}
            onChangeText={text => setComment(text)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default PostDetails;
