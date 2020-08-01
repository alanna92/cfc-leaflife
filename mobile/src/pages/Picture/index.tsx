import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import NewPost from '../NewPost';

const Picture: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const navigation = useNavigation();

  let camera;

  async function takePicture(): Promise<void> {
    if (camera) {
      const photo = await camera.takePictureAsync();
      navigation.navigate('NewPost', { photo });
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={() => takePicture()}
          >
            <FontAwesome
              name="camera"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const NewPostStack = createStackNavigator();

const NewPostStackScreen: React.FC = () => {
  return (
    <NewPostStack.Navigator headerMode="none">
      <NewPostStack.Screen name="Picture" component={Picture} />
      <NewPostStack.Screen name="NewPost" component={NewPost} />
    </NewPostStack.Navigator>
  );
};

export default NewPostStackScreen;
