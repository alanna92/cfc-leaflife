import React, { useState } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TextInput, FAB } from 'react-native-paper';

import styles from './styles';
import TreeModal from '../TreeModal';

interface Props {
  onChangeMapType: Function;
}

const FriendsMap: React.FC<Props> = ({ onChangeMapType }) => {
  const [search, setSearch] = useState<string>('');
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: -25.527832,
            longitude: -54.554058,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{
              latitude: -25.527832,
              longitude: -54.554058,
            }}
            onPress={() => setVisibleModal(true)}
          >
            <Image
              source={require('../../../assets/markers/person1.png')}
              style={{ width: 60, height: 60 }}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -25.50888,
              longitude: -54.57176,
            }}
            onPress={() => setVisibleModal(true)}
          >
            <Image
              source={require('../../../assets/markers/person2.png')}
              style={{ width: 60, height: 60 }}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -25.53416,
              longitude: -54.567896,
            }}
            onPress={() => setVisibleModal(true)}
          >
            <Image
              source={require('../../../assets/markers/person4.png')}
              style={{ width: 60, height: 60 }}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -25.542879,
              longitude: -54.576678,
            }}
            onPress={() => setVisibleModal(true)}
          >
            <Image
              source={require('../../../assets/markers/person5.png')}
              style={{ width: 60, height: 60 }}
            />
          </Marker>
        </MapView>
        <TextInput
          style={styles.input}
          label="Search a place"
          mode="outlined"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <FAB
          style={styles.infoMyLocation}
          icon="image-filter-center-focus-strong"
          small
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={styles.infoFab}
          icon="tree"
          onPress={() => onChangeMapType()}
        />

        <TreeModal
          visible={visibleModal}
          onChangeVisibleModal={(visible: boolean) => setVisibleModal(visible)}
        />
      </View>
    </>
  );
};

export default FriendsMap;
