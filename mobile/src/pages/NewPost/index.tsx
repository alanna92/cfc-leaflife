import React, { useState } from 'react';
import { Image, View, KeyboardAvoidingView, Text } from 'react-native';
import { Appbar, TextInput, Button, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const NewPost: React.FC = () => {
  const [comment, setComment] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const [treeName, setTreeName] = useState<string>();
  const [shareWithFacebook, setShareWothFacebook] = useState<boolean>(true);
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="New Post" />
        <Appbar.Action
          icon="send"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </Appbar.Header>
      <ScrollView>
        <Image source={require('../../../assets/posts/post1.png')} />

        <KeyboardAvoidingView behavior="position" style={styles.form}>
          <TextInput
            style={styles.input}
            label="Write Something Nice"
            mode="outlined"
            value={comment}
            onChangeText={text => setComment(text)}
          />
          <TextInput
            style={styles.input}
            label="Species"
            mode="outlined"
            value={species}
            onChangeText={text => setSpecies(text)}
          />
          <TextInput
            style={styles.input}
            label="Give it a Name"
            mode="outlined"
            value={treeName}
            onChangeText={text => setTreeName(text)}
          />
          <TextInput
            style={styles.input}
            label="Your Location"
            mode="outlined"
            disabled
            value="Manaus, AM - Brazil"
          />
        </KeyboardAvoidingView>

        <View style={styles.share}>
          <Text>Facebook</Text>
          <Switch
            value={shareWithFacebook}
            onValueChange={(value: boolean) => setShareWothFacebook(value)}
          />
        </View>

        <Button
          style={styles.buttom}
          icon="plus"
          mode="contained"
          onPress={() => console.log('Pressed')}
        >
          SELECT YOUR LOCATION
        </Button>
      </ScrollView>
    </>
  );
};

export default NewPost;
