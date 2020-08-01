import React, { useState } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TextInput, FAB } from 'react-native-paper';

import styles from './styles';

interface Props {
  onChangeMapType: Function;
}

const InfoMap: React.FC<Props> = ({ onChangeMapType }) => {
  const [search, setSearch] = useState<string>('');

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
          >
            <Image
              source={require('../../../assets/markers/shop.png')}
              style={{ width: 40, height: 40 }}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -25.50888,
              longitude: -54.57176,
            }}
          >
            <Image
              source={require('../../../assets/markers/shop.png')}
              style={{ width: 40, height: 40 }}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -25.53416,
              longitude: -54.567896,
            }}
          >
            <Image
              source={require('../../../assets/markers/shop.png')}
              style={{ width: 40, height: 40 }}
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
          icon="account-group"
          onPress={() => onChangeMapType()}
        />
      </View>
    </>
  );
};

export default InfoMap;
