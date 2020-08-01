import * as React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PostDetails from '../PostDetails';
import Post from '../../models/Post';
import styles from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    setPosts([
      {
        id: 1,
        name: 'João da Silva',
        postLocation: 'Manaus, AM - Brazil',
        postTime: '2h',
        plantSpecies: 'Castanha-do-Pará',
        comment: 'Very happy to make this little action! *-*',
        likeCount: 20,
        commentsCount: 20,
      },
      {
        id: 2,
        name: 'João da Silva',
        postLocation: 'Manaus, AM - Brazil',
        postTime: '2h',
        plantSpecies: 'Castanha-do-Pará',
        comment: 'Very happy to make this little action! *-*',
        likeCount: 20,
        commentsCount: 20,
      },
    ]);
  }, []);

  function handleShowPostDetails(post: Post): void {
    navigation.navigate('PostDetails', { post });
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="LeafLife" />
      </Appbar.Header>

      <ScrollView>
        {posts.map(post => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.row}>
              <Image source={require('../../../assets/profile/profile1.png')} />
              <View style={styles.postHeaderText}>
                <Text style={styles.postHeaderTitle}>{post.name}</Text>
                <Text style={styles.postHeaderSubtitle}>
                  Planted a {post.plantSpecies} at {post.postLocation} (
                  {post.postTime})
                </Text>
              </View>
            </View>
            <Text style={styles.postComment}>{post.comment}</Text>
            <Image
              style={styles.postImage}
              source={require('../../../assets/posts/post1.png')}
            />
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleShowPostDetails(post)}
              >
                <Image
                  style={styles.icon}
                  source={require('../../../assets/icons/liked.png')}
                />
                <Text style={styles.iconCount}>{post.likeCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.row}
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
        ))}
      </ScrollView>
    </>
  );
};

const HomeStack = createStackNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="PostDetails" component={PostDetails} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
