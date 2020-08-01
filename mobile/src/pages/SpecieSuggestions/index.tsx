import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { TextInput } from 'react-native-paper';

const SpecieSuggestions: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="What should I plant?" />
      </Appbar.Header>
      <TextInput
        style={styles.input}
        label="Search a place"
        mode="outlined"
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        <View style={styles.postContainer}>
          <Text style={styles.postComment}>1 - Pata de Vaca (Bauhinia variegata)</Text>
          <Image
            style={styles.postImage}
            source={require('../../../assets/posts/post3.jpeg')}
          />
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postComment}>1 - Pata de Vaca (Bauhinia variegata)</Text>
          <Image
            style={styles.postImage}
            source={require('../../../assets/posts/post3.jpeg')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default SpecieSuggestions;
