import * as React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import MapView from 'react-native-maps';

import styles from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.extendedToolbar}>
          <Avatar.Image
            size={120}
            source={require('../../../assets/profile/profile-big.png')}
          />
          <Text style={styles.username}>Sarah Miller</Text>
          <View style={styles.indicatorsContent}>
            <Text style={styles.indicator}>30 Trees</Text>
            <Text style={styles.indicator}>30 Species</Text>
            <Text style={styles.indicator}>250 Firends</Text>
          </View>
        </View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: -25.527832,
            longitude: -54.554058,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        />
      </View>
    </>
  );
};

export default Profile;
